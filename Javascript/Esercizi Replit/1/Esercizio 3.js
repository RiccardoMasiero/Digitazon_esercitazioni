// scrivere una funzione chiamata biggerString che 
// date due stringhe in ingresso
// ritorni la piu' lunga

function biggerString(a, b) {
    if (a.length > b.length) {
      return a
    } else {
      return b
    }
  }
  
  console.log (biggerString('abc','abcd'))