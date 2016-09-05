(() => {
    // This method currently sets up one menu and dynamically changes the target.
    // TODO: Create one menu for each item
    function setupMenu() {
        var menu = document.createElement('menu')
        menu.setAttribute('id', 'soupsince-menu')
        menu.setAttribute('type', 'context')

        var menuItem = document.createElement('menuitem')
        var itemString = chrome.i18n.getMessage('read_from_here')
        menuItem.appendChild(document.createTextNode(itemString))
        menuItem.setAttribute('icon', chrome.extension.getURL('icons/soup-32.png'))

        menuItem.addEventListener('click', function() {
            var target = menu.target
            var url = Timestamp.fromPrevious(target).getSinceURL()
            window.location.assign(url)
        })

        menu.appendChild(menuItem)

        document.body.appendChild(menu)

        return menu
    }

    function addContextMenu(post) {
        post.addEventListener('contextmenu', function() {
            menu.target = post
        })
        post.setAttribute('contextmenu', menu.id)
    }

    var menu = setupMenu()

    document.addEventListener('post-added', (event) => {
        addContextMenu(event.detail)
    })
})()
