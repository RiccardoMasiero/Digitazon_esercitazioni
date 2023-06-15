//DA PRIMA A SECONDA PARTE CI SONO I MODI CHE NON SALVANO NEL FILE SYSTEM 


import axios from 'axios'
//PRIMA PARTE --> ESEMPI PER FARE LE CHIAMATE DIRETTAMENTE CON IL TEMINALE DI VSCODE (SCRIPTS)

// 1) ESEMPIO POST 

async function call() {
    const res = await axios.post('http://localhost:3000/case-cinematografiche', {
        name: "Universal Pictures",
        fondazione: 1990,
        stato: "Stati Uniti"
    })
    //console.log(res.status)
}

call()

///////////////////////////////////////////////////////////

// 2) ESEMPIO PUT

async function call() {
    const res = await axios.put('http://localhost:3000/case-cinematografiche/8', {
        fondazione: 2000
    })
    console.log(res.status)
}

call()

//////////////////////////////////////////////////////////

// 3) ESEMPIO GET  



//////////////////////////////////////////////////////////


// 4) ESEMPIO GET DELETE


///////////////////////////////////////////////////////////

//SECONDA PARTE --> ESEMPI PER FARE LE CHIAMATE CON POSTMAN  (ROUTES)

// 1) ESEMPIO POST 


///////////////////////////////////////////////////////////

// 2) ESEMPIO PUT


///////////////////////////////////////////////////////////

// 3) ESEMPIO GET  


///////////////////////////////////////////////////////////

// 3,5) ESEMPIO GET ID

const cCGetId = (req, res) => {
    for (let i = 0; i < caseCinematografiche.length; i++) {
      if (caseCinematografiche[i].id == req.params.id) {
        res.send(caseCinematografiche[i]);
        return
      }
    }
    res.status(404).end()
}


///////////////////////////////////////////////////////////

// 4) ESEMPIO GET DELETE


///////////////////////////////////////////////////////////







