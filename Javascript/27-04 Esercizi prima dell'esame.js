// Dato un array ordinato di interi tutti diversi, e un numero target, ritornare l'indice al quale il target e' trovato. Se non viene trovato ritornare l'indice al quale andrebbe inserito per mantenere l'ordine
// Esempio
// nums = [1,3,5,6], target = 5
// 2
// nums = [1,3,5,6], target = 2
// 1

//PSEUDOCODICE
// 1. creo un array di numeri ordinati e un numero target.
// 2. creo una variabile che chiamo index cje parte da valore di 0.
// 3. Finché index è minore della lunghezza dell'array e l'elemento corrente dell'array è minore del target incrementa index di 1.
// 4. Restituisci index.

const nums = [1, 3, 5, 6];

const target = 7;
let index = 0;
while (index < nums.length && nums[index] < target) {

  index++;

}

console.log(index); 

