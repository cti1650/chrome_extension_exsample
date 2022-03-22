(()=>{
  const url = location.href;
  const reg = /https:\/\/www\.npmjs\.com\/package\/(?<package>.+)/g;
  const ele = document.querySelector("h2");
  const resulte = reg.exec(url);
  if (resulte) {
    const div = document.createElement("div");
    div.className = "pl3";
    div.innerHTML = `<a href="https://openbase.com/search?q=${resulte.groups.package}" target="_blank">openbase</a>`;
    ele.appendChild(div);
  }
})();