globalData = ""
region = ""
target = ""
async function getData(gen,y){
    region = y
    const response = await fetch(`data/Dexes/${region}.json`); 
    globalData = await response.json();
    mktables(gen)
    }
function mktables(gen){
      clearTable();
      let genFilter = Number(document.getElementById("Gen").value);
      let typeSelector = document.getElementById("Type");
      let typeFilter = typeSelector.options[typeSelector.selectedIndex].text;
      target = document.getElementById(`pkmtable`);
      let titolo = document.getElementById('genlb')
      let counter = 0
      let tempText = ""
      let row = ""
      let regionName = region.charAt(0).toUpperCase() + region.slice(1);
      titolo.innerHTML = `${regionName}`
      for(let i=0; i<globalData.length; i++)
      {
        const pkm = globalData[i];
        if((typeFilter==="- All -" || pkm.Type1==typeFilter || pkm.Type2==typeFilter) && (genFilter === 0 || genFilter == Number(pkm.Gen))){
          if(counter%3==0 && counter>=3)
            {
              tempText+=`<tr>${row}</tr>`
              row = ""
            }
          row+=`<td class="pkm"><img src="data/artwork/${globalData[i].Number}${globalData[i].Name}.png" loading='lazy'>${globalData[i].Name}</td>`
          counter ++
        
        }
        
      }
      tempText+=`<tr>${row}</tr>`
      target.innerHTML += tempText      
      
      
    };
function clearTable() {
      document.getElementById("pkmtable").innerHTML = ``;
      }
