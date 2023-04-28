//Come creare una mappa
//Esempio 1))))
//La mappa è formata da un insieme di array che contengono chiavi e rispettivi valori 
//Si possono attribuire più valori ad una chiave 

const m = new Map([
    ['name', 'Riccardo'],
    ['lastname', 'Degni'],
    ['skills', { frontEnd: ['js'], backEnd: ['node'] }],
    ['fn', function() { console.log('hai chiamato fn!') }],
    [10, 'ciao']
  ])
  
  //Per selezionare qualcosa dentro una mappa si usa il metodo .get()

  console.log( m.get('skills').frontEnd[0] )
  m.get('fn')()
  
  //Il metodo .has va a verificare se c'è oppure no una cosa all'interno della mappa e mi ritorna un booleano (true or false)
  console.log( m.has(10) )

  //Esempio 2)))))

  const M = new Map([
    ['numeroDiMele', 0]
  ])

  //Qui sotto vediamo l'utilizzo del metodo .set e .get

  //.set serve per aggiungere un elemento nella mappa specificando chiave e valore di esso, se esiste un elemento con la stessa chiave, l'elemento sarà aggiornato.

  //.get ritorna l'elemento specificato con la stessa chiave e se quell'elemento è un oggetto, ogni volta che verrà modificato si modificherà anche all'interno della mappa

  
  function aumentaNumeroDiMeleDi(n) {
    m.set('numeroDiMele', m.get('numeroDiMele') + n)
  }
  
  aumentaNumeroDiMeleDi(1)
  aumentaNumeroDiMeleDi(1)
  aumentaNumeroDiMeleDi(4)
  
  console.log( m.get('numeroDiMele') )
  



    
  
