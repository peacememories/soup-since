self.on("click", function(node) {
  var timestamp = Timestamp.fromPrevious(node);
  window.location.assign(timestamp.getSinceURL());
});
