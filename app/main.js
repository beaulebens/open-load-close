function openLoadClose( linkObj ) {
    chrome.tabs.create({url: linkObj.linkUrl, active: false}, myTab => {
        function listener(tabId, changeInfo, tab) {
            // make sure the status is 'complete' and it's the right tab
            if (tabId === myTab.id && changeInfo.status == 'complete') {
                chrome.tabs.remove(myTab.id);
                chrome.tabs.onUpdated.removeListener(listener);
            }
        };
        chrome.tabs.onUpdated.addListener(listener);
    });
}

chrome.contextMenus.create({
    id: "openloadclose",
    title: "Open, load, and close",
    contexts: [ 'link' ]
});
chrome.contextMenus.onClicked.addListener( openLoadClose );