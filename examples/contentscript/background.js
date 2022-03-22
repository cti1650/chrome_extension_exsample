"use strict";

const insertFile = (url, tabId) => {
    const npmUrl = "https://www.npmjs.com/package/";
    const githubUrl = "https://github.com/";
    if (url.startsWith(npmUrl)) {
      chrome.scripting.insertCSS(
        {
          target: { tabId: tabId },
          files: ['style/content.css'],
        },
        () => {}
      );
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId },
          files: ['script/npm.js'],
        },
        () => {}
      );
    }
    if (url.startsWith(githubUrl)) {
      chrome.scripting.insertCSS(
        {
          target: { tabId: tabId },
          files: ['content.css'],
        },
        () => {}
      );
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId },
          files: ['script/github.js'],
        },
        () => {}
      );
    }
};

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    insertFile(tab.url, tabId);
  }
});