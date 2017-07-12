chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: "[].slice.call(document.querySelectorAll('p,span,h1,h2,h3,h4,h5,h6')).forEach(function (e) { e.innerHTML = e.innerHTML.replace(/(true) (dominant|submissive|dom|sub)/gi, \"<span style='color:#FFC300;font-weight:bold'>twue $2</span>\").replace(/true/gi, \"<span style='color:#FFC300;font-weight:bold'>twue</span>\");});"
    });
});