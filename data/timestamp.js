var timestampRegEx = /\/post\/([0-9]{9})/;

function extractTimestamp(str) {
  return parseInt(timestampRegEx.exec(str)[1]);
}

window.Timestamp = {
  get: function(node) {
    var permaLink = node.querySelector(".permalink a");
    return extractTimestamp(permaLink.getAttribute("href"));
  },
  correct: function(timestamp) {return timestamp + 1}
}
