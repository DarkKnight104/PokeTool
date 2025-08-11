bottone = document.getElementById("generate")
DexSelector = document.getElementById("dexType");
DexFilter=""
globalData=""
selected = []
slider = document.getElementById("slider")

bottone.onclick = function() {
    DexFilter = DexSelector.options[DexSelector.selectedIndex].text;
    getData()
}
async function getData(){
    const response = await fetch(`data/Dexes/${DexFilter.toLowerCase()}.json`);
    globalData = await response.json();
    console.log(`fetch of ${DexFilter} compleated`)
    randomizer()
    }

function randomizer(){
    clear()
    i=0
    j=0
    const selectedTypes = getSelectedTypes();
    const selectedGen = getSelectedGen();
    while(i<Number(slider.value)){
        const pkm = globalData[getRandomPokemon()]
        const allowedType = selectedTypes.length === 0 || selectedTypes.includes(pkm.Type1) || selectedTypes.includes(pkm.Type2)
        const allowedGen = selectedGen.length === 0 || selectedGen.includes(pkm.Gen)
        const repeat = selected.includes(pkm.Name)
        if(allowedType && allowedGen && !repeat){
            img = document.getElementById(`img${i+1}`)
            img.innerHTML = `<img src="data/artwork/${pkm.Number}${pkm.Name}.png"></img>`
            selected[i] = pkm.Name
            i++
            }
        j++
        if (j >= globalData.length) break;
    }
}
function clear(){
    for(let i=0; i<6;i++){
    img = document.getElementById(`img${i+1}`)
    img.innerHTML = ""
}
}
function getSelectedTypes() {
    return [...document.querySelectorAll('input[name="type"]:checked')]
        .map(cb => cb.value);
}
function getSelectedGen() {
    return [...document.querySelectorAll('input[name="gen"]:checked')]
        .map(cb => cb.value);
}
function getRandomPokemon() {
  return Math.floor(Math.random() * (globalData.length - 1) + 1)
}


