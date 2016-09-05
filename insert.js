(() => {
    function addToActionBar(post) {
        //TODO: rewrite using templating or strings
        var timestamp = Timestamp.fromPrevious(post)
        var actionBar = post.querySelector('.actionbar')
        var first = actionBar.querySelector('.first')

        var link = timestamp.getSinceURL()

        var linkElement = document.createElement('a')
        var listElement = document.createElement('li')

        linkElement.innerText = '>';
        linkElement.classList.add('since')
        linkElement.href = link
        linkElement.title = chrome.i18n.getMessage('read_from_here')

        listElement.appendChild(linkElement)

        actionBar.insertBefore(listElement, first.nextSibling)

        linkElement.addEventListener('click', function(e) {
            e.stopImmediatePropagation()
        })
    }

    document.addEventListener('post-added', (event) => {
        addToActionBar(event.detail)
    })
})()