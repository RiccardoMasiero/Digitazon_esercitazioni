
//ESERCIZIO 1))))))

// 1. Definisci la funzione replaceWord(testo, parolaDaCercare, parolaSostitutiva)
// 2. Dividi il testo in parole utilizzando lo spazio come separatore e salva le parole in un array
// 3. Esamina l'array di parole
// 4. Se la parola corrente è uguale alla parola da cercare sostituisci la parola corrente con la parola da sostituire
// 5. Altrimenti, aggiungi la parola corrente al nuovo testo
// 6. Aggiungi uno spazio tra le parole se non sei all'ultima parola dell'array
// 7. Restituisci il nuovo testo


function findAndReplace(Testo, parolaDaCercare, parolaSostitutiva,) {
    let parole = Testo.split(" ");
    let nuovoTesto = "";
    for (let i = 0; i < parole.length; i++) {
      if (parole[i] === parolaDaCercare) {
        nuovoTesto += parolaSostitutiva ;
      } else {
        nuovoTesto += parole[i];
      }
      if (i < parole.length - 1) {
        nuovoTesto += " ";
      }
    }
    return nuovoTesto;
  }

  console.log(findAndReplace('Ciao a tutti belli e brutti','Ciao','oaiC'));

  //ESERCIZIO 2)))))