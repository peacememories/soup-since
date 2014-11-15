var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var cm = require("sdk/context-menu");

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

var contextItem = cm.Item({
  label: "Start reading from here",
  contentScriptFile: [
    data.url("timestamp.js"),
    data.url("context-menu.js")
  ]
});

contextItem.context.add(cm.URLContext("*.soup.io"));
contextItem.context.add(cm.SelectorContext(".post"));
