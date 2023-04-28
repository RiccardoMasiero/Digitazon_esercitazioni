//Come creare un oggetto 
// Esempio 1)))))
const obj = {
    name: 'Riccardo',
    lastname: 'Degni'
  }
  
  const livelloDiFormalità = 'house'
  function checkLivelloDiFormalità() {
    if( livelloDiFormalità == 'work' ) return 'lastname'
    if( livelloDiFormalità == 'house' ) return 'name'
  }
  
  console.log( 'Ciao ' + obj[ checkLivelloDiFormalità() ] )


  //Esempio 2)))))
  const obje = { name: 'Riccardo', lastname: 'Degni',
  skills: {
    frontEnd: ['html', 'css', 'js', 'react', { x: { colors: ['blue', 'green'], fn: function() { console.log('hai chiamato fn!') } } }],
    backEnd: ['node', 'java', 'py', 'php']
  }
}


//Per selezionare quello che voglio all'interno di un oggetto posso utilizzare il punto oppure utilizzare i numeri dato che ogni elemento all'interno di uno oggetto è numerato partendo da zero.

console.log( obje.skills.frontEnd[4].x.colors[1] )
obje.skills.frontEnd[4].x.fn()

//Altro modo più modulare è questo con i backtic e il $ che non richiede neanche la necesità di mettere i + o le virgolette 

console.log(`il terzo voto dello studente con id ${studente.idMatricola} (${studente.nomeCompleto}) è ${studente.voti[2]} `)