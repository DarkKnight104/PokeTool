globalData = ""
region = ""
target = ""
async function getData(gen,y){
    region = y
    const response = await fetch(`https://darkknight104.github.io/PokeTool/data/${region}.json`); 
    globalData = await response.json();
    mktables(gen)
    }
function mktables(gen){
      clearTable();
      let genFilter = document.getElementById("Gen").value;
      let typeSelector = document.getElementById("Type");
      let typeFilter = typeSelector.options[typeSelector.selectedIndex].text;
      target = document.getElementById(`pkmtable`);
      let counter = 0
      let tempText = ""
      let row = ""
      let regionName = region.charAt(0).toUpperCase() + region.slice(1);
      for(let i=0; i<globalData.length; i++)
      {
        const pkm = globalData[i];
        if((typeFilter==="- All -" || pkm.Type1==typeFilter || pkm.Type2==typeFilter) && (Number(genFilter) === 0 || Number(genFilter) == Number(pkm.Gen))){
          if(counter%3==0 && counter>=3)
            {
              tempText+=`<tr>${row}</tr>`
              row = ""
            }
          row+=`<td class="pkm">${globalData[i].Name}</td>`
          counter ++
        
        }
        
      }
      tempText+=`<tr>${row}</tr>`
      console.log(tempText)
      target.innerHTML += tempText      
      
      
    };
function clearTable() {
      document.getElementById("pkmtable").innerHTML = ``;
      }
