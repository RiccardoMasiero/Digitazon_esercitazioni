`
Cancelleria
500
40
60

Servizi igenici
1000
1
200

Vendite
0

`

[{
    "reparto": "Servizi igenici",
    "spesa totale": 1201,
}, {
    "reparto": "Vendite",
    "spesa totale": 0
}]
//PSEUDOCODICE: Definisci la funzione sommaImporti(categorie)
// creo una variabile vuota che poi andrò a riempire con .push
// Per ogni elemento i dell'array categorie prendi il sottoarray di categorie[i]
// Creo la variabile somma che parte da 0
// Per ogni elemento j del sottoarray aggiungi importi[j] a somma
// Aggiungi somma a totale
// Restituisci totale

function sommaImporti(categorie) {
    let totale = [];
    
    for (let i = 0; i < categorie.length; i++) {
      const importi = categorie[i][1];
      let somma = 0;
      
      for (let j = 0; j < importi.length; j++) {
        somma += importi[j];
      }
      
      totale.push(somma);
    }
    
    return totale;
  }
  
  const input = [
    ["Cancelleria", [500, 40, 60]],
    ["Servizi igenici", [1000, 1, 200]],
    ["Vendite", [0]]
  ];
  console.log(sommaImporti(input));


// Scrivere una funzione che sia in grado di dire se una data stringa in ingresso sia o meno “pazza”. Una stringa e’ “pazza” se: ● non ha un soggetto, un soggetto puo’ essere solo: “Lui”, “Lei”, “Egli”, “Ella” ● finisce con “?!?” ● contiene la stringa “Cthulhu” ● inizia e finisce con una parola che finisce in “are”, o “ere”, o “ire” ● inizia con della punteggiatura, quindi con uno tra “,.!?:;-~” Basta uno dei suddetti “requisiti di pazzia” per rendere una frase “pazza”; a meno che la stringa contenga una di queste stringhe, in quel caso la stringa non e’ mai “pazza”: ● Church ● mare

// PSEUDOCODICE: CREA LA FUNZIONE testPazzia 
//Definisci i soggetti 
//Attribuisci un valore iniziale alla pazzia 
//Definisci tutti gli if
//Return valore booleano della pazzia

function testPazzia(str) {
    const soggetti = ["Lui", "Lei", "Egli", "Ella"];
    let pazza = false;
    if (str.includes("Church") || str.includes("mare")|| str.includes (soggetti)) {
        pazza = false;
    } else{
        if (str.charAt(str.length -1) === "?!?") {
            pazza = true;
        } else if (str.includes("Cthulhu")) {
            pazza = true;
        } else if ( str.charAt (0)=== "are","ere","ire"|| str.endswith(str.charAt(str.length -1)=== "are","ere","ire")) {
            pazza = true;

        } else if (str.charAt(0)===",.!?:;-~") {
            pazza = true;

        } 
    }
    return pazza;
}

console.log(testPazzia("church ciao a tutti"));