var indexOf = Array.prototype.indexOf

var timestampRegEx = /\/post\/([0-9]{9})/

var Timestamp = function(timestamp) {
    this.timestamp = timestamp
}

Timestamp.prototype.getSinceURL = function() {
    // distinction for friends (www.soup.io/friends) 
    // or user (USER.soup.io) soup
    urlarray = window.location.toString()
    urlarray = urlarray.split('/')
    if (urlarray[2].substring(0,4) == 'www.') {
        var url = new URL(window.location);
        url.searchParams.set('since', this.timestamp)
    } else {
        url	 = new URL(urlarray[0] +'//'+ urlarray[2] +'/since/'+ this.timestamp)
    }
    return url
}

Timestamp.fromPermaLink = function(link) {
    var timestamp = parseInt(timestampRegEx.exec(link)[1])
    return new Timestamp(timestamp)
}

Timestamp.fromDOM = function(node) {
    var permaLink = node.querySelector('.permalink a')
    return Timestamp.fromPermaLink(permaLink.href);
}

Timestamp.fromPrevious = function(node) {
    var nodes = document.querySelectorAll('.post')
    var index = indexOf.call(nodes, node);
    if(index > 0) {
        return Timestamp.fromDOM(nodes.item(index-1))
    } else {
        return Timestamp.fromDOM(node)
    }
}

window.Timestamp = Timestamp
