self.on("click", function(node) {
  var timestamp = Timestamp.fromDOM(node);
  window.location.assign(timestamp.getSinceURL());
});
