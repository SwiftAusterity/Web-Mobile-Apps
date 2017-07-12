chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: "[].slice.call(document.querySelectorAll('p,span,h1,h2,h3,h4,h5,h6')).forEach(function (e) { e.innerHTML = e.innerHTML.replace(/([tT])R([uU][eE]) ([dD][oO][mM][iI][nN][aA][nN][tT]|[sS][uU][bB][mM][iI][sS][sS][iI][vV][eE]|[dD][oO][mM]|[sS][uU][bB])/g, \"<span style='color:#FFC300;font-weight:bold'>$1W$2 $3</span>\").replace(/(t)r(ue) (dominant|submissive|dom|sub)/gi, \"<span style='color:#FFC300;font-weight:bold'>$1w$2 $3</span>\").replace(/([tT])R([uU][eE])/g, \"<span style='color:#FFC300;font-weight:bold'>$1W$2</span>\").replace(/(t)r(ue)/gi, \"<span style='color:#FFC300;font-weight:bold'>$1w$2</span>\");});"
    });
});