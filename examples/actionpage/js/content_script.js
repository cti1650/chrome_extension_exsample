(()=>{
  "use strict";

  chrome.runtime.sendMessage({
    title: document.title,
    url: location.href,
  });

  chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    alert(msg.send);
  });
})();