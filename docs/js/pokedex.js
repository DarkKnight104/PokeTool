fetch("https://darkknight104.github.io/PokeTool/data/pokemon.json")
  .then(response => response.json())
  .then(data => {
    const button = document.getElementById("button");
    let type = ""
    console.log(data.Type1)
    function mkgen(min, max, x) {
      let id = `gen${x}`;
      let target = document.getElementById(id);
      target.innerHTML = `<tr>
                          <td colspan="3" id="genlb">Gen ${x}</td>
                          </tr>`;

      for (let i = min - 1; i <= max - 1; i += 3) {
        let first = ""
        let third = ""
        let second = ""
        first = data[i].Name;
        console.log(type)
        console.log(data[i].Type1)
        if((i+1)<max){
         second = data[i + 1].Name;
        }
        if((i+2)<max){
          third = data[i + 2].Name;
        }    
        target.innerHTML += `<tr>
                              <td class="pkm">${first}</td>
                              <td class="pkm">${second}</td>
                              <td class="pkm">${third}</td>
                              </tr>`;
      }
    }

    function clearTable() {
      for (let i = 1; i <= 9; i++) {
        let id = `gen${i}`;
        let target = document.getElementById(id);
        target.innerHTML = ``;
      }
      document.getElementById("genun").innerHTML = ``;
      document.getElementById("genhisui").innerHTML = ``;
    }

    button.onclick = function () {
      clearTable();
      let genFilter = document.getElementById("Gen").selectedIndex;
      let typeFilter = document.getElementById("Type").selectedIndex;
      type = typeFilter
      switch (genFilter) {
        case 1: mkgen(1, 151, 1); break;
        case 2: mkgen(152, 251, 2); break;
        case 3: mkgen(252, 386, 3); break;
        case 4: mkgen(387, 493, 4); break;
        case 5: mkgen(494, 649, 5); break;
        case 6: mkgen(650, 721, 6); break;
        case 7: mkgen(722, 807, 7); break;
        case 8: mkgen(808, 809, "un"); break;
        case 9: mkgen(810, 898, 8); break;
        case 10: mkgen(899, 905, "hisui"); break;
        case 11: mkgen(906, 1025, 9); break;
        case 0:
          mkgen(1, 151, 1);
          mkgen(152, 251, 2);
          mkgen(252, 386, 3);
          mkgen(387, 493, 4);
          mkgen(494, 649, 5);
          mkgen(650, 721, 6);
          mkgen(722, 807, 7);
          mkgen(808, 809, "un");
          mkgen(810, 898, 8);
          mkgen(899, 905, "hisui");
          mkgen(906, 1025, 9);
          break;
      }
    };
  })