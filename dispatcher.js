(() => {
    function dispatchItem(item) {
        var event = new CustomEvent('post-added', {
            'detail': item
        })
        document.dispatchEvent(event)
    }

    function dispatchChildren(node) {
        var posts = node.querySelectorAll('.post')
        for(var post of Array.from(posts)) {
            dispatchItem(post)
        }
    }

    var observer = new MutationObserver((changeSets) => {
        changeSets.forEach((changeSet) => {
            Array.from(changeSet.addedNodes).forEach(dispatchChildren)
        })
    })

    // Promise is used here to create a deferred call so all events are dispatched after the synchronous code is called
    new Promise((resolve) => {
        var batchList = document.querySelector('#more_history')
        if(batchList) {
            dispatchChildren(batchList)
            observer.observe(batchList, {childList: true})
        }
        resolve()
    })
})()