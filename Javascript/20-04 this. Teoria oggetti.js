let student = {
    'name': 'mario rossi',
    'age': 10,
    'sayHello': function() {
      console.log('ciao mi chiamo ' + this.name)
    }
  }
  
  student.sayHello()

//   esercizio

// creare un oggetto chiamato "language" che rappresenta un linguaggio di programmazione, e che abbia le seguenti caratteristiche:

// - proprietà label, indica il nome del linguaggio
// - proprietà tags; un array di 3 stringhe che indica le caratteristiche dell'oggetto
// - un metodo printTags che itera sui tag dell'oggetto e li stampa con un WHILE

// chiamare il metodo printTags per mostrare i dati in console

let language = {
    label: 'nomeLinguaggio',
    tags: ['caratteristica1','caratteristica2','caratteristica3'],
    printTags: function () {
        let i = 0
        while (i < this.tags.length) {
            console.log(this.tags[i]);
            i++;
        }
    }
};

language.printTags();
