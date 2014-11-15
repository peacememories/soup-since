var timestampRegEx = /\/post\/([0-9]{9})/;

var Timestamp = function(timestamp) {
  this.timestamp = timestamp;
}

Timestamp.prototype.getSinceURL = function() {
  var url = new URL(window.location);
  url.searchParams.append("until", this.timestamp+1);
  return url;
}

Timestamp.fromPermaLink = function(link) {
  var timestamp = parseInt(timestampRegEx.exec(link)[1]);
  return new Timestamp(timestamp);
}

Timestamp.fromDOM = function(node) {
  var permaLink = node.querySelector(".permalink a");
  return Timestamp.fromPermaLink(permaLink.href);
}

window.Timestamp = Timestamp;
