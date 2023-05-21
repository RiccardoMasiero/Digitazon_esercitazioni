// scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi


function countNoSpaces(string) {
    let numeroLettere = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            numeroLettere ++;
        }
    }
    return numeroLettere
  }

console.log(countNoSpaces('a b c')); 