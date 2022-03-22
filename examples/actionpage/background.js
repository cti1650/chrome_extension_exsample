"use strict";

var textTitle = "";
var textUrl = "";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  textTitle = request.title;
  textUrl = request.url;
  chrome.storage.local.set({ textUrl: textUrl });
  return true;
});

chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  if(chrome.runtime.lastError) {
    return;
  }
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId },
      files: ["js/content_script.js"],
    },
    () => {}
  );
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
  if(chrome.runtime.lastError) {
    return;
  }
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId },
      files: ["js/content_script.js"],
    },
    () => {}
  );
});