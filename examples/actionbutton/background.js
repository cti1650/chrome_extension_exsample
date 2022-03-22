"use strict";

// Action Button: background.js 
chrome.action.onClicked.addListener((tab) => {
    const url = tab.url;
    const npmUrl = 'https://www.npmjs.com/package/'
    const githubUrl = 'https://github.com/'
    if (url.startsWith(npmUrl)) {
        chrome.tabs.create({
            url: `https://openbase.com/search?q=${url.replace(npmUrl, '')}`
        });
    }
    if (url.startsWith(githubUrl)) {
        chrome.tabs.create({
            url: `https://openbase.com/search?q=${url.replace(githubUrl, '')}`
        });
    }
});