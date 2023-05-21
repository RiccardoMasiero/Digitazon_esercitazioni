// scrivere una funzione chiamata countVowels che 
// data una stringa in ingresso
// ritorni il numero di vocali presenti nella stringa

function countVowels(string) {
    numeroDiVocali = 0
    for (let i = 0; i < string.length; i++) {
        if ('aeiou'.includes(string [i]) || 'AEIOU'.includes(string[i])){
            numeroDiVocali ++
        }
    }

    return numeroDiVocali 
}

console.log(countVowels('CanEeEs'));