// scrivere una funzione chiamata createArray che 
// dato un numero n in ingresso
// ritorni un array lungo n che contiene tutti n

// ad esempio per 3 ritorna [3, 3, 3]
// ad esempio per 5 ritorna [5, 5, 5, 5, 5]
// ad esempio per 0 ritorna []
// ad esempio per -1 ritorna []


function createArray(n) {
    if (n > 0) {
        let arr = [];
        for (let i = n; i > 0 ; i--) {
            arr.push(n);
        } 
        return arr;
    } else if(n <= 0){

        return [];
    }
}

console.log(createArray(7));