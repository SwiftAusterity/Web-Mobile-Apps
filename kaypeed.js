chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: "[].slice.call(document.querySelectorAll('a')).forEach(function (e) { e.href = e.href.replace('https://fetlife.com/explore', 'https://fetlife.com/posts/everyone') })"
    });
});