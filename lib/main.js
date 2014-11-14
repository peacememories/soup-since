var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.soup.io",
  contentScriptFile: [
    data.url("timestamp.js"),
    data.url("insert.js")
  ],
  contentScriptWhen: "ready",
  attachTo: ["existing", "top"],
  contentStyleFile: data.url("insert.css")
});
