self.on("click", function(node) {
  var timestamp = Timestamp.get(node);
  timestamp = Timestamp.correct(timestamp);
  window.location.assign(Timestamp.url(timestamp));
});
