// scrivere una funzione chiamata countUndefinedKeys che 
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null


function countUndefinedKeys(obj) {
    let numeroDiChiavi = 0;
    let Chiavi = Object.keys(obj);
    for (let i = 0; i < Chiavi.length; i++) {
      let chiave = Chiavi[i];
      let valore = obj[chiave];
      if (valore === undefined || valore === null) {
        numeroDiChiavi++;
      }
    }
    return numeroDiChiavi;
}

console.log(countUndefinedKeys({Alice : 18, Marco : null, Giulia: undefined,}));