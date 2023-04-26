// scrivere una funzione chiamata between che 
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b, estremi esclusi
function between(a,b) {
    const result = [];
    for (let i = a + 1; i < b; i++) {
    result.push(i);
    }
    return result;
}

console.log(between(1,10));