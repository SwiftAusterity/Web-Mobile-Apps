chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: "getElements(document).forEach(function (e) { e.innerHTML = replaceRoles(e.innerHTML) });"
    });
});