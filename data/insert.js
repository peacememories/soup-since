var forEach = Array.prototype.forEach;

function addToActionBar(actionBar) {
  var first = actionBar.querySelector(".first");

  var timestamp = Timestamp.get(actionBar);
  timestamp = Timestamp.correct(timestamp);
  var link = Timestamp.url(timestamp);

  var linkText = document.createTextNode(">");
  var linkElement = document.createElement("a");
  var listElement = document.createElement("li");

  linkElement.appendChild(linkText);
  linkElement.classList.add("since");
  linkElement.setAttribute("href", link);
  linkElement.setAttribute("title", "Show all posts after this one");

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
