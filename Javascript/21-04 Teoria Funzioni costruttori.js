// La gestione degli errori, è una tecnica necessaria per evitare problemi con il programma.
//Errori possono nascere dall'utilizzo di variabili che magari non sono state nominate correttamente o dall'utilizzo di funzioni inesistenti.
//Avere degli errori all'interno della propria applicazione potrebbe portare grossi fattori negativi come per esempio la perdita di clienti.
//Se si verifica un errore nel mio codice è molto probabile che tutto il codice che c'è dopo quel'errore non venga eseguito.
//Con javascript gli errori posso individuarli solo a runtime mentre con Typescript ho la fase di compile e la fase di run... se vi sono errori nel compile allora la mia applicazione non potrà neanche partire.

//Try e catch servono per individuare eventuali errori 
//All'interno di try vado a mettere una parte di codice che secondo me potrebbe dare un errore e con catch gli dico cosa fare nel caso in cui si dovesse verificare effettivamente un errore in modo che la lettura del mio codice non si blocchi all'errore.


//ESEMPIO TRY E CATCH)))))

function fn() {
    console.log('ciao')
  }
  

try {
    fn()
    console.log('ciao 1')
    console.log('ciao 2')
  }
  catch( err ) {
    console.log( 'si è verificato un errore, con messaggio: ' + err.message )
  }
  
  console.log('ciao')


  // creare un array in cui occorre includere 5 dati di tipi diversi:
  // - un letterale oggetto con proprietà x: 10 e y: 5
  // - un numero (100)
  // - una stringa ("javascript")
  // - una mappa ("label" -> "sono una mappa")
  // - un array [40, 50, 60]
  
  // Iterare sull'array esterno con un foreach e...
  // se l'elemento corrente è...
  
  // un letterale oggetto, stampa la somma delle sue proprietà x e y
  
  // un numero, controlla se è > 100 scrivi red, altrimenti blue
  
  // una stringa, stampa il suo primo carattere
  
  // una mappa, stampa il valore della sua proprietà "label", se ce l'ha
  
  // un array, stampa i numeri in ordine inverso


  let ar = [ {x:10,y:5}, 100, 'javascript', new Map([['label','sono una mappa']]), [40,50,60] ]

        ar.forEach((el)=>{

            // check mappa
            if (el instanceof Map){
                console.log( el.has('label') ? el.get('label') : 'no label property found' );
                return
            }

            // check array
            if( Array.isArray(el) ){
                console.log('sono un array - stampo numeri in ordine inverso');
                for (let i = el.length-1; i >=0; i--) console.log(el[i]);

                return
            }

            // check stringa, numero, oggetto
            switch( typeof el ) {
                case 'string':
                    console.log('sono una stringa - primo carattere = '+el[0])
                    return

                case 'number':
                    console.log( (el > 100) ? 'numero - red' : 'numero - blue') 
                    return

                case 'object':
                    console.log('oggetto - somma proprietà = '+ (el.x+el.y))
                    return
            }

        })



