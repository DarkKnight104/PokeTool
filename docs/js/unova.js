globalData = ""

async function getData(data){
    let region = "unova"
    const response = await fetch(`https://darkknight104.github.io/PokeTool/data/${region}.json`); 
    globalData = await response.json();
    mktables(5)
    }
function mktables(gen){
      clearTable();
      let genFilter = document.getElementById("Gen").selectedIndex;
      let typeSelector = document.getElementById("Type");
      let typeFilter = typeSelector.options[typeSelector.selectedIndex].text;
      let target = document.getElementById(`gen${gen}`);
      let counter = 0
      let tempText = ""
      let row = ""
      target.innerHTML = `<tr><td colspan="3" id="genlb">Gen ${gen}</td></tr>`;
      for(let i=0; i<globalData.length; i++)
      {
        const pkm = globalData[i];
        if((typeFilter==="- All -" || pkm.Type1==typeFilter || pkm.Type2==typeFilter) && (genFilter === 0 || genFilter == pkm.Gen)){
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
      for (let i = 1; i <= 9; i++) {
        let id = `gen${i}`;
        let target = document.getElementById(id);
        target.innerHTML = ``;
      }
      document.getElementById("genun").innerHTML = ``;
      document.getElementById("genhisui").innerHTML = ``;
    }
