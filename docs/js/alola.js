let alolaData;

function kanto(data){
    alolaData = data
    mktables()
    }
function mktables(){
      clearTable();
      let genFilter = document.getElementById("Gen").selectedIndex;
      let typeFilter = document.getElementById("Type").selectedIndex;
      type = intToType(typeFilter);
      mkgen(1, 302, 7, type)
      
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
          first=alolaData[min].Name
          if((min+1)<max)
          {second=alolaData[min+1].Name}
          if((min+1)<max)
          {third=alolaData[min+2].Name}
          min += 3;
        }else{
          while(min<max){
            if(ft == alolaData[min].Type1 || ft == alolaData[min].Type2){
              first=alolaData[min].Name
              min++
            break;
            }
            min++
          }
          while(min<max){
            if(ft == alolaData[min].Type1 || ft == alolaData[min].Type2){
              second=alolaData[min].Name
              min++
              break;
            }
            min++
          }
          while(min<max){
            if(ft == alolaData[min].Type1 || ft == alolaData[min].Type2){
              third=alolaData[min].Name
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
fetch("https://darkknight104.github.io/PokeTool/data/alola.json")
  .then(response => response.json())
  .then(data => kanto(data))
