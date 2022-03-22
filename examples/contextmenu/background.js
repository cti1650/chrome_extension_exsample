"use strict";

// Context Menu: background.js
chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    id: "openbaseSearch",
    title: "OpenBase Search",
    contexts: ["page", "link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const url = info.linkUrl || tab.url;
  const menuItemId = info.menuItemId;
  switch (menuItemId) {
    case "openbaseSearch":
      const npmUrl = "https://www.npmjs.com/package/";
      const githubUrl = "https://github.com/";
      if (url.startsWith(npmUrl)) {
        chrome.tabs.create({
          url: `https://openbase.com/search?q=${url.replace(npmUrl, "")}`,
        });
      }
      if (url.startsWith(githubUrl)) {
        chrome.tabs.create({
          url: `https://openbase.com/search?q=${url.replace(githubUrl, "")}`,
        });
      }
      break;
    default:
      break;
  }
});
