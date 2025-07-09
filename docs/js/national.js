globalData = " ";

function kanto(data){
    globalData = data
    mktables()
    }
function mktables(){
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
function mkgen(min, max, x, ft="") {
      min = min-1
      let id = `gen${x}`;
      let target = document.getElementById(id);
      target.innerHTML = `<tr>
                          <td colspan="3" id="genlb">Gen ${x}</td>
                          </tr>`;
      while (min<max) {
        let first = ""
        let third = ""
        let second = ""
        if(ft=="")
        {
          first=globalData[min].Name
          if((min+1)<max)
          {second=globalData[min+1].Name}
          if((min+1)<max)
          {third=globalData[min+2].Name}
          min += 3;
        }else{
          while(min<max){
            if(ft == globalData[min].Type1 || ft == globalData[min].Type2){
              first=globalData[min].Name
              min++
            break;
            }
            min++
          }
          while(min<max){
            if(ft == globalData[min].Type1 || ft == globalData[min].Type2){
              second=globalData[min].Name
              min++
              break;
            }
            min++
          }
          while(min<max){
            if(ft == globalData[min].Type1 || ft == globalData[min].Type2){
              third=globalData[min].Name
              min++
            break;
            }
            min++
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
fetch("https://darkknight104.github.io/PokeTool/data/national.json")
  .then(response => response.json())
  .then(data => kanto(data))
