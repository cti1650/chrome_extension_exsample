(()=>{
  const url = location.href;
  const reg = /https:\/\/github\.com\/.+?\/(?<package>[\w-]+)/g;
  const ele = document.querySelector(".file-navigation");
  const resulte = reg.exec(url);
  if (resulte) {
    const a = document.createElement("a");
    a.className = "btn ml-2 d-none d-md-block";
    a.href = `https://openbase.com/search?q=${resulte.groups.package}`;
    a.target="_blank"
    a.innerText = "openbase";
    ele.appendChild(a);
  }
})();