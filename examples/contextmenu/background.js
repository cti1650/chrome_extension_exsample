"use strict";

// Context Menu: background.js
chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    id: "openbaseSearch",
    title: "OpenBase Search",
    contexts: ["page", "link"],
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
        const reg = /https:\/\/www\.npmjs\.com\/package\/(?<package>.+)/g;
        const resulte = reg.exec(url);
        if (resulte) {
          chrome.tabs.create({
            url: `https://openbase.com/search?q=${resulte.groups.package}`,
          });
        }
      }
      if (url.startsWith(githubUrl)) {
        const reg = /https:\/\/github\.com\/.+?\/(?<package>[\w-]+)/g;
        const resulte = reg.exec(url);
        if (resulte) {
          chrome.tabs.create({
            url: `https://openbase.com/search?q=${resulte.groups.package}`,
          });
        }
      }
      break;
    default:
      break;
  }
});
