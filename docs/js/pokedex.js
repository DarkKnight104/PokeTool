const button = document.getElementById("button");


button.onclick = function () {
  let dexType = document.getElementById("dexType").selectedIndex
  switch(dexType){
    case 0: loadScript('js/national.js'); break;
    case 1: loadScript('js/kanto.js'); break;
    case 2: loadScript('js/jhoto.js'); break;
    case 3: loadScript('js/hoenn.js'); break;
    case 4: loadScript('js/sinnoh.js'); break;
    case 5: loadScript('js/unova.js', () => getData());; break;
    case 6: loadScript('js/kalos.js'); break;
    case 7: loadScript('js/alola.js'); break;
    case 8: loadScript('js/galar.js'); break;
    case 9: loadScript('js/paldea.js'); break;
  }
}

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log(`${src} loaded`);
    if (callback) callback();
  };
  script.onerror = () => {
    console.error(`Failed to load ${src}`);
  };
  document.head.prepend(script);
}
