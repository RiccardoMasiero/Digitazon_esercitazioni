// Scrivere una funzione AND che si comporti come l'and nei booleani (&&) e accetti un numero qualsiasi di parametri
// AND(true, false)
// AND(true)
// AND(false)
// AND(false, true, true, true, false)
// Alberto Zaccagni  a  Tutti 14:39
// AND(false, true, true, true, false, false, true, true, true, false)
// AND(false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false)

//Spread operator (...)


function and(...bool) {
    for (let i = 0; i < bool.length; i++) {
        if (!bool[i]) {
            return bool[i]
        }
    }
    return true
}
console.log( and (true,false));