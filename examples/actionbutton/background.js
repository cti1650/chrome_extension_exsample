chrome.action.onClicked.addListener((tab) => {
    alert(tab.url);
});