const button = document.getElementById("button");


button.onclick = function () {
  let dexType = document.getElementById("dexType").selectedIndex
  switch(dexType){
    case 0: loadScript('js/generatePokemon.js', () => getData(0,"national")); break;
    case 1: loadScript('js/generatePokemon.js', () => getData(1,"kanto")); break;
    case 2: loadScript('js/generatePokemon.js', () => getData(2,"jhoto")); break;
    case 3: loadScript('js/generatePokemon.js', () => getData(3,"hoenn")); break;
    case 4: loadScript('js/generatePokemon.js', () => getData(4,"sinnoh")); break;
    case 5: loadScript('js/generatePokemon.js', () => getData(5,"unova")); break;
    case 6: loadScript('js/generatePokemon.js', () => getData(6,"kalos")); break;
    case 7: loadScript('js/generatePokemon.js', () => getData(7,"alola")); break;
    case 8: loadScript('js/generatePokemon.js', () => getData(8,"galar")); break;
    case 9: loadScript('js/generatePokemon.js', () => getData(9,"paldea")); break;
  }
}

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    if (callback) callback();
  };
  script.onerror = () => {
    console.error(`Failed to load ${src}`);
  };
  document.head.prepend(script);
}
