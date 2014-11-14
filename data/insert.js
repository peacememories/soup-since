var forEach = Array.prototype.forEach;

var actionBars = document.querySelectorAll(".actionbar");

forEach.call(actionBars, function(actionBar) {
  var first = actionBar.querySelector(".first");

  var permalink = actionBar.querySelector(".permalink");
  var timestamp = permalink.querySelector("a").getAttribute("href").match(/\/post\/([0-9]{9})/)[1];
  var link = "?since=" + timestamp;

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
  })
});

self.port.on("detach", function() {
  var elements = document.querySelectorAll(".actionbar .since");
  forEach.call(elements, function(element) {
    element.parentNode.removeChild(element);
  });
});
