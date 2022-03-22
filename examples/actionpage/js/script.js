(() => {
  "use strict";

  chrome.storage.local.get(["textUrl"], function (result) {
    const url = result.textUrl;
    const npmUrl = "https://www.npmjs.com/package/";
    const githubUrl = "https://github.com/";
    if (url.startsWith(npmUrl)) {
      const reg = /https:\/\/www\.npmjs\.com\/package\/(?<package>.+)/g;
      const resulte = reg.exec(url);
      if (resulte) {
        document.getElementById(
          "popup"
        ).src = `https://openbase.com/search?q=${resulte.groups.package}`;
        return;
      }
    }
    if (url.startsWith(githubUrl)) {
      const reg = /https:\/\/github\.com\/.+?\/(?<package>[\w-]+)/g;
      const resulte = reg.exec(url);
      if (resulte) {
        document.getElementById(
          "popup"
        ).src = `https://openbase.com/search?q=${resulte.groups.package}`;
        return;
      }
    }
    document.getElementById("popup").src = "https://openbase.com/search";
  });
})();
