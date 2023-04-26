// scrivere una funzione chiamata arrayNumbersPlusMinus1 che 
// prende in ingresso un array di numeri ed un numero n, 
// la funzione ritorna un nuovo array con tutti i numeri ai quali sommato o 
// sottratto 1 danno n

// ad esempio per [1,2,3] e 2 ritorna [1,3]
// ad esempio per [2,5,8] e 7 ritorna [8]
// ad esempio per [2,6,8] e 7 ritorna [6, 8]

function arrayNumbersPlusMinus1(arr,n) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr [i] + 1 === n || arr [i] - 1 === n) {
            result.push(arr[i])
            
        }
    }
    return result
}

console.log(arrayNumbersPlusMinus1([3,4,5],4));