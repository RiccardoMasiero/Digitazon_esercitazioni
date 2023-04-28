// Scrivere una funzione che dato in ingresso un numero, ritorni il fattoriale di quel numero.

function fattoriale(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(fattoriale(4))


