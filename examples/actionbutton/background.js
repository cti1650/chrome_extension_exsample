"use strict";

// Action Button: background.js
chrome.action.onClicked.addListener((tab) => {
  const url = tab.url;
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
});
