fetch("https://darkknight104.github.io/PokeTool/data/pokemon.json")
  .then(response => response.json())
  .then(data => {
    const button = document.getElementById("button");
    type = ""
    function mkgen(min, max, x, ft="") {
      let id = `gen${x}`;
      let target = document.getElementById(id);
      target.innerHTML = `<tr>
                          <td colspan="3" id="genlb">Gen ${x}</td>
                          </tr>`;
      while (min<max) {
        let first = ""
        let third = ""
        let second = ""
        console.log(ft)
        console.log(data[min].Type1)
        if (ft != "") {
            while (min < max) {
                if (data[min].Type1 === ft || data[min].Type2 === ft) {
                first = data[min].Name;
                min++;
                break; // trovato il primo, esco dal ciclo
                }
            min++;
            }
          }
        if (ft != "") {
            while (min < max) {
                if (data[min].Type1 === ft || data[min].Type2 === ft) {
                second = data[min].Name;
                min++;
                break; // trovato il primo, esco dal ciclo
                }
            min++;
            }
          }
        if (ft != "") {
            while (min < max) {
                if (data[min].Type1 === ft || data[min].Type2 === ft) {
                third = data[min].Name;
                min++;
                break; // trovato il primo, esco dal ciclo
                }
            min++;
            }
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
    function intToType(x){
      switch(x){
        case 1:  return "Normal";
        case 2:  return "Fire";
        case 3:  return "Water";
        case 4:  return "Electric";
        case 5:  return "Grass";
        case 6:  return "Ice";
        case 7:  return "Fighting";
        case 8:  return"Poison";
        case 9:  return"Ground";
        case 10: return "Flying";
        case 11: return "Psychic";
        case 12: return "Bug";
        case 13: return "Rock";
        case 14: return "Ghost";
        case 15: return "Dragon";
        case 16: return "Dark";
        case 17: return "Steel";
        case 18: return "Fairy";
        default: return "";
      }
    }
    button.onclick = function () {
      clearTable();
      let genFilter = document.getElementById("Gen").selectedIndex;
      let typeFilter = document.getElementById("Type").selectedIndex;
      type = intToType(typeFilter);
      switch (genFilter) {
        case 1: mkgen(1, 151, 1, type); break;
        case 2: mkgen(152, 251, 2, type); break;
        case 3: mkgen(252, 386, 3, type); break;
        case 4: mkgen(387, 493, 4, type); break;
        case 5: mkgen(494, 649, 5, type); break;
        case 6: mkgen(650, 721, 6, type); break;
        case 7: mkgen(722, 807, 7, type); break;
        case 8: mkgen(808, 809, "un", type); break;
        case 9: mkgen(810, 898, 8, type); break;
        case 10: mkgen(899, 905, "hisui", type); break;
        case 11: mkgen(906, 1025, 9, type); break;
        case 0:
          mkgen(1, 151, 1, type);
          mkgen(152, 251, 2, type);
          mkgen(252, 386, 3, type);
          mkgen(387, 493, 4, type);
          mkgen(494, 649, 5, type);
          mkgen(650, 721, 6, type);
          mkgen(722, 807, 7, type);
          mkgen(808, 809, "un", type);
          mkgen(810, 898, 8, type);
          mkgen(899, 905, "hisui", type);
          mkgen(906, 1025, 9, type) ;
          break;
      }
    };
  })