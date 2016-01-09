#Soup Since

This Add-On for Firefox adds a "since"-button to the soup.io action bar.

The button allows you to show only posts from the current post on.

##Installation

[Soup Since @ addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/soup-since/)


###Via Xpi Download

You can get precompiled versions of the software from the [download page](https://github.com/peacememories/soup-since/releases)

###From Source

####Prerequisites
* [Mozilla Add-On SDK](https://developer.mozilla.org/en/Add-ons/SDK)

####Installation
* Install the Mozilla Add-On SDK following the instructions on their site.
* Clone the soup-since github repository.
* Navigate to the folder.
* Run `cxf xpi` to create the xpi file
* Open the xpi file with Firefox

```bash
  git clone https://github.com/peacememories/soup-since.git
  cd soup-since
  cfx xpi
  firefox soup-since.xpi
```


