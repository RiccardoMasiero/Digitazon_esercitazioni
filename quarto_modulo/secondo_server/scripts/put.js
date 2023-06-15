const axios = require('axios')

async function call() {
    const res = await axios.put('http://localhost:3000/case-cinematografiche/8', {
        fondazione: 2000
    })
    console.log(res.status)
}

call()


// let cane = { nome: 'Sally', cognome: 'Qualcosa' }
// console.log({ ...cane, ...{ nome: 'Commisario Rex' } })
// { nome: 'Commissario Rex' }