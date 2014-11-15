var forEach = Array.prototype.forEach;

function addToActionBar(actionBar) {
  var first = actionBar.querySelector(".first");

  var timestamp = Timestamp.fromDOM(actionBar);
  var link = timestamp.getSinceURL();

  var linkText = document.createTextNode(">");
  var linkElement = document.createElement("a");
  var listElement = document.createElement("li");

  linkElement.appendChild(linkText);
  linkElement.classList.add("since");
  linkElement.href = link;
  linkElement.title = self.options.titleString;

  listElement.appendChild(linkElement);

  actionBar.insertBefore(listElement, first.nextSibling);

  linkElement.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
  });
}

function addToChildren(node) {
  var actionBars = node.querySelectorAll(".actionbar");
  forEach.call(actionBars, addToActionBar);
}

var observer = new MutationObserver(function(changeSets) {
  changeSets.forEach(function(changeSet) {
    forEach.call(changeSet.addedNodes, addToChildren);
  });
});

var batchList = document.querySelector("#more_history");

if(batchList !== null) {
  addToChildren(batchList);
  observer.observe(batchList, {childList: true});
}

self.port.on("detach", function() {
  observer.disconnect();
  var elements = document.querySelectorAll(".actionbar .since");
  forEach.call(elements, function(element) {
    element.parentNode.removeChild(element);
  });
});
