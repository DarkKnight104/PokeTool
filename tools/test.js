const fs = require('fs').promises;
const csv = require('csvtojson');

let regione = "unova"


async function convertCsvToJson() {
  // 1. Leggi e converti CSV direttamente in array di oggetti
  const results = await csv().fromFile(`tools/${regione}.csv`);

  const debolezze = results.map(entry => {

    entry.Weaknesses = [];
    entry.Resistances = [];
    entry.QuadWeaknesses = [];
    entry.QuadResistances = [];
    entry.Immunity = [];
    

    var Normale = 0
    var Fuoco = 0
    var Acqua = 0
    var Elettro = 0
    var Erba = 0
    var Ghiaccio = 0
    var Lotta = 0
    var Veleno = 0
    var Terra = 0
    var Volante = 0
    var Psico = 0
    var Coleottoro = 0
    var Roccia = 0
    var Spettro = 0
    var Drago = 0
    var Buio = 0
    var Acciaio = 0
    var Folletto = 0
    if (entry.Type1 === "Normal" || entry.Type2 === "Normal"){
        Normale += 0
        Fuoco += 0
        Acqua += 0
        Elettro += 0
        Erba += 0
        Ghiaccio += 0
        Lotta += -2
        Veleno += 0
        Terra += 0
        Volante += 0
        Psico += 0
        Coleottoro += 0
        Roccia += 0
        Spettro += -10
        Drago += 0
        Buio += 0
        Acciaio += 0
        Folletto += 0
        }
    if (entry.Type1 === "Fire" || entry.Type2 === "Fire"){
        Normale += 0
        Fuoco += -2
        Acqua += 2
        Elettro += 0
        Erba += -2
        Ghiaccio += -2
        Lotta += 0
        Veleno += 0
        Terra += 2
        Volante += 0
        Psico += 0
        Coleottoro += -2
        Roccia += 2
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += -2
        Folletto += -2
        }
    if (entry.Type1 === "Water" || entry.Type2 === "Water"){
        Normale += 0
        Fuoco += -2
        Acqua += -2
        Elettro += 2
        Erba += 2
        Ghiaccio += -2
        Lotta += 0
        Veleno += 0
        Terra += 0
        Volante += 0
        Psico += 0
        Coleottoro += 0
        Roccia += 0
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += -2
        Folletto += 0
        }
    if (entry.Type1 === "Electric" || entry.Type2 === "Electric"){
        Normale += 0
        Fuoco += 0
        Acqua += 0
        Elettro += -2
        Erba += 0
        Ghiaccio += 0
        Lotta += 0
        Veleno += 0
        Terra += 2
        Volante += -2
        Psico += 0
        Coleottoro += 0
        Roccia += 0
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += -2
        Folletto += 0
        }
    if (entry.Type1 === "Grass" || entry.Type2 === "Grass"){
        Normale += 0
        Fuoco += 2
        Acqua += -2
        Elettro += -2
        Erba += -2
        Ghiaccio += 2
        Lotta += 0
        Veleno += 2
        Terra += -2
        Volante += 2
        Psico += 0
        Coleottoro += 2
        Roccia += 0
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += 0
        Folletto += 0
        }
    if (entry.Type1 === "Ice" || entry.Type2 === "Ice"){
        Normale += 0
        Fuoco += 2
        Acqua += 0
        Elettro += 0
        Erba += 0
        Ghiaccio += -2
        Lotta += 2
        Veleno += 0
        Terra += 0
        Volante += 0
        Psico += 0
        Coleottoro += 0
        Roccia += 2
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += 2
        Folletto += 0
        }
    if (entry.Type1 === "Fighting" || entry.Type2 === "Fighting"){
        Normale += 0
        Fuoco += 0
        Acqua += 0
        Elettro += 0
        Erba += 0
        Ghiaccio += 0
        Lotta += 0
        Veleno += 0
        Terra += 0
        Volante += 2
        Psico += 2
        Coleottoro += -2
        Roccia += -2
        Spettro += 0
        Drago += 0
        Buio += -2
        Acciaio += 0
        Folletto += 2
        }
    if (entry.Type1 === "Poison" || entry.Type2 === "Poison"){
        Normale += 0
        Fuoco += 0
        Acqua += 0
        Elettro += 0
        Erba += -2
        Ghiaccio += 0
        Lotta += -2
        Veleno += -2
        Terra += 2
        Volante += 0
        Psico += 2
        Coleottoro += -2
        Roccia += 0
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += 0
        Folletto += -2
        }
    if (entry.Type1 === "Ground" || entry.Type2 === "Ground"){
        Normale += 0
        Fuoco += 0
        Acqua += 2
        Elettro += -10
        Erba += 2
        Ghiaccio += 2
        Lotta += 0
        Veleno += -2
        Terra += 0
        Volante += 0
        Psico += 0
        Coleottoro += 0
        Roccia += -2
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += 0
        Folletto += 0
        }
    if (entry.Type1 === "Flying" || entry.Type2 === "Flying"){
        Normale += 0
        Fuoco += 0
        Acqua += 0
        Elettro += 2
        Erba += -2
        Ghiaccio += 2
        Lotta += -2
        Veleno += 0
        Terra += -10
        Volante += 0
        Psico += 0
        Coleottoro += -2
        Roccia += 2
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += 0
        Folletto += 0
        }
    if (entry.Type1 === "Psychic" || entry.Type2 === "Psychic"){
        Normale += 0
        Fuoco += 0
        Acqua += 0
        Elettro += 0
        Erba += 0
        Ghiaccio += 0
        Lotta += -2
        Veleno += 0
        Terra += 0
        Volante += 0
        Psico += -2
        Coleottoro += 2
        Roccia += 0
        Spettro += 2
        Drago += 0
        Buio += 2
        Acciaio += 0
        Folletto += 0
        }
    if (entry.Type1 === "Bug" || entry.Type2 === "Bug"){
        Normale += 0
        Fuoco += 2
        Acqua += 0
        Elettro += 0
        Erba += -2
        Ghiaccio += 0
        Lotta += -2
        Veleno += 0
        Terra += -2
        Volante += 2
        Psico += 0
        Coleottoro += 0
        Roccia += 2
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += 0
        Folletto += 0
        }
    if (entry.Type1 === "Rock" || entry.Type2 === "Rock"){
        Normale += -2
        Fuoco += -2
        Acqua += 2
        Elettro += 0
        Erba += 2
        Ghiaccio += 0
        Lotta += 2
        Veleno += -2
        Terra += 2
        Volante += -2
        Psico += 0
        Coleottoro += 0
        Roccia += 0
        Spettro += 0
        Drago += 0
        Buio += 0
        Acciaio += 2
        Folletto += 0
        }
    if (entry.Type1 === "Ghost" || entry.Type2 === "Ghost"){
        Normale += -10
        Fuoco += 0
        Acqua += 0
        Elettro += 0
        Erba += 0
        Ghiaccio += 0
        Lotta += -10
        Veleno += -2
        Terra += 0
        Volante += 0
        Psico += 0
        Coleottoro += -2
        Roccia += 0
        Spettro += 2
        Drago += 0
        Buio += 2
        Acciaio += 0
        Folletto += 0
        }
    if (entry.Type1 === "Dragon" || entry.Type2 === "Dragon"){
        Normale += 0
        Fuoco += -2
        Acqua += -2
        Elettro += -2
        Erba += -2
        Ghiaccio += 2
        Lotta += 0
        Veleno += 0
        Terra += 0
        Volante += 0
        Psico += 0
        Coleottoro += 0
        Roccia += 0
        Spettro += 0
        Drago += 2
        Buio += 0
        Acciaio += 0
        Folletto += 2
        }
    if (entry.Type1 === "Dark" || entry.Type2 === "Dark"){
        Normale += 0
        Fuoco += 0
        Acqua += 0
        Elettro += 0
        Erba += 0
        Ghiaccio += 0
        Lotta += 2
        Veleno += 0
        Terra += 0
        Volante += 0
        Psico += -10
        Coleottoro += 2
        Roccia += 0
        Spettro += -2
        Drago += 0
        Buio += -2
        Acciaio += 0
        Folletto += 2
        }
    if (entry.Type1 === "Steel" || entry.Type2 === "Steel"){
        Normale += -2
        Fuoco += 2
        Acqua += 0
        Elettro += 0
        Erba += -2
        Ghiaccio += -2
        Lotta += 2
        Veleno += -10
        Terra += 2
        Volante += -2
        Psico += -2
        Coleottoro += -2
        Roccia += -2
        Spettro += 0
        Drago +=  -2
        Buio += 0
        Acciaio += -2
        Folletto += -2
        }
    if (entry.Type1 === "Fairy" || entry.Type2 === "Fairy"){
        Normale += 0
        Fuoco += 0
        Acqua += 0
        Elettro += 0
        Erba += 0
        Ghiaccio += 0
        Lotta += -2
        Veleno += 2
        Terra += 0
        Volante += 0
        Psico += 0
        Coleottoro += -2
        Roccia += 0
        Spettro += 0
        Drago += -10
        Buio += -2
        Acciaio += 2
        Folletto += 0
        }
    
    // Debolezze        
    if (Normale === 2){
        entry.Weaknesses.push("Normal")
    }
    if (Fuoco === 2){
        entry.Weaknesses.push("Fire")
    }     
    if (Acqua === 2){
        entry.Weaknesses.push("Water")
    } 
    if (Elettro === 2){
        entry.Weaknesses.push("Electric")
    } 
    if (Erba === 2){
        entry.Weaknesses.push("Grass")
    } 
    if (Ghiaccio === 2){
        entry.Weaknesses.push("Ice")
    } 
    if (Lotta === 2){
        entry.Weaknesses.push("Fighting")
    } 
    if (Veleno === 2){
        entry.Weaknesses.push("Poison")
    } 
    if (Terra === 2){
        entry.Weaknesses.push("Ground")
    } 
    if (Volante === 2){
        entry.Weaknesses.push("Flying")
    } 
    if (Psico === 2){
        entry.Weaknesses.push("Psychic")
    } 
    if (Coleottoro === 2){
        entry.Weaknesses.push("Bug")
    } 
    if (Roccia === 2){
        entry.Weaknesses.push("Rock")
    } 
    if (Spettro === 2){
        entry.Weaknesses.push("Ghost")
    } 
    if (Drago === 2){
        entry.Weaknesses.push("Dragon")
    }
    if (Buio === 2){
        entry.Weaknesses.push("Dark")
    } 
    if (Acciaio === 2){
        entry.Weaknesses.push("Steel")
    }
    if (Folletto === 2){
        entry.Weaknesses.push("Fairy")
    }
    //Resistenze
    if (Normale === -2){
        entry.Resistances.push("Normal")
    }
    if (Fuoco === -2){
        entry.Resistances.push("Fire")
    }     
    if (Acqua === -2){
        entry.Resistances.push("Water")
    } 
    if (Elettro === -2){
        entry.Resistances.push("Electric")
    } 
    if (Erba === -2){
        entry.Resistances.push("Grass")
    } 
    if (Ghiaccio === -2){
        entry.Resistances.push("Ice")
    } 
    if (Lotta === -2){
        entry.Resistances.push("Fighting")
    } 
    if (Veleno === -2){
        entry.Resistances.push("Poison")
    } 
    if (Terra === -2){
        entry.Resistances.push("Ground")
    } 
    if (Volante === -2){
        entry.Resistances.push("Flying")
    } 
    if (Psico === -2){
        entry.Resistances.push("Psychic")
    } 
    if (Coleottoro === -2){
        entry.Resistances.push("Bug")
    } 
    if (Roccia === -2){
        entry.Resistances.push("Rock")
    } 
    if (Spettro === -2){
        entry.Resistances.push("Ghost")
    } 
    if (Drago === -2){
        entry.Resistances.push("Dragon")
    }
    if (Buio === -2){
        entry.Resistances.push("Dark")
    } 
    if (Acciaio === -2){
        entry.Resistances.push("Steel")
    }
    if (Folletto === -2){
        entry.Resistances.push("Fairy")
    }
    //QuadRes

        if (Normale === -4){
        entry.QuadResistances.push("Normal")
    }
    if (Fuoco === -4){
        entry.QuadResistances.push("Fire")
    }     
    if (Acqua === -4){
        entry.QuadResistances.push("Water")
    } 
    if (Elettro === -4){
        entry.QuadResistances.push("Electric")
    } 
    if (Erba === -4){
        entry.QuadResistances.push("Grass")
    } 
    if (Ghiaccio === -4){
        entry.QuadResistances.push("Ice")
    } 
    if (Lotta === -4){
        entry.QuadResistances.push("Fighting")
    } 
    if (Veleno === -4){
        entry.QuadResistances.push("Poison")
    } 
    if (Terra === -4){
        entry.QuadResistances.push("Ground")
    } 
    if (Volante === -4){
        entry.QuadResistances.push("Flying")
    } 
    if (Psico === -4){
        entry.QuadResistances.push("Psychic")
    } 
    if (Coleottoro === -4){
        entry.QuadResistances.push("Bug")
    } 
    if (Roccia === -4){
        entry.QuadResistances.push("Rock")
    } 
    if (Spettro === -4){
        entry.QuadResistances.push("Ghost")
    } 
    if (Drago === -4){
        entry.QuadResistances.push("Dragon")
    }
    if (Buio === -4){
        entry.QuadResistances.push("Dark")
    } 
    if (Acciaio === -4){
        entry.QuadResistances.push("Steel")
    }
    if (Folletto === -4){
        entry.QuadResistances.push("Fairy")
    }
    // QuadWeakness
        if (Normale === 4){
        entry.QuadWeaknesses.push("Normal")
    }
    if (Fuoco === 4){
        entry.QuadWeaknesses.push("Fire")
    }     
    if (Acqua === 4){
        entry.QuadWeaknesses.push("Water")
    } 
    if (Elettro === 4){
        entry.QuadWeaknesses.push("Electric")
    } 
    if (Erba === 4){
        entry.QuadWeaknesses.push("Grass")
    } 
    if (Ghiaccio === 4){
        entry.QuadWeaknesses.push("Ice")
    } 
    if (Lotta === 4){
        entry.QuadWeaknesses.push("Fighting")
    } 
    if (Veleno === 4){
        entry.QuadWeaknesses.push("Poison")
    } 
    if (Terra === 4){
        entry.QuadWeaknesses.push("Ground")
    } 
    if (Volante === 4){
        entry.QuadWeaknesses.push("Flying")
    } 
    if (Psico === 4){
        entry.QuadWeaknesses.push("Psychic")
    } 
    if (Coleottoro === 4){
        entry.QuadWeaknesses.push("Bug")
    } 
    if (Roccia === 4){
        entry.QuadWeaknesses.push("Rock")
    } 
    if (Spettro === 4){
        entry.QuadWeaknesses.push("Ghost")
    } 
    if (Drago === 4){
        entry.QuadWeaknesses.push("Dragon")
    }
    if (Buio === 4){
        entry.QuadWeaknesses.push("Dark")
    } 
    if (Acciaio === 4){
        entry.QuadWeaknesses.push("Steel")
    }
    if (Folletto === 4){
        entry.QuadWeaknesses.push("Fairy")
    }
    // Immunity
    if (Normale < -4){
        entry.Immunity.push("Normal")
    }
    if (Fuoco < -4){
        entry.Immunity.push("Fire")
    }     
    if (Acqua < -4){
        entry.Immunity.push("Water")
    } 
    if (Elettro < -4){
        entry.Immunity.push("Electric")
    } 
    if (Erba < -4){
        entry.Immunity.push("Grass")
    } 
    if (Ghiaccio < -4){
        entry.Immunity.push("Ice")
    } 
    if (Lotta < -4){
        entry.Immunity.push("Fighting")
    } 
    if (Veleno < -4){
        entry.Immunity.push("Poison")
    } 
    if (Terra < -4){
        entry.Immunity.push("Ground")
    } 
    if (Volante < -4){
        entry.Immunity.push("Flying")
    } 
    if (Psico < -4){
        entry.Immunity.push("Psychic")
    } 
    if (Coleottoro < -4){
        entry.Immunity.push("Bug")
    } 
    if (Roccia < -4){
        entry.Immunity.push("Rock")
    } 
    if (Spettro < -4){
        entry.Immunity.push("Ghost")
    } 
    if (Drago < -4){
        entry.Immunity.push("Dragon")
    }
    if (Buio < -4){
        entry.Immunity.push("Dark")
    } 
    if (Acciaio < -4){
        entry.Immunity.push("Steel")
    }
    if (Folletto < -4){
        entry.Immunity.push("Fairy")
    }
    return entry;
     })

  // 2. Salva in formato JSON
  await fs.writeFile(
    `docs/data/Dexes/${regione}.json`,
    JSON.stringify(debolezze, null, 2)
  );

  console.log(`${regione}.json creato!`);
}

// Esegui la funzione
convertCsvToJson()
  .catch(err => console.error('Errore:', err));
