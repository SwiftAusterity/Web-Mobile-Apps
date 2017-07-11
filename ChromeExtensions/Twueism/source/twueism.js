chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: "[].slice.call(document.querySelectorAll('p,span')).forEach(function (e) { e.innerHTML = e.innerHTML.replace(/true/gi, 'twue') })"
    });
});