import axios from 'axios'

async function call() {
  let res = await axios.post('http://localhost:3000/animali', {
    animale: 'Capibara',
    categoria: 'mammiferi'
  })
  console.log(res.status, res.data)
}

call()

async function call2() {
  let res = await axios.post('http://localhost:3000/animali', {
    animale: 'Zebra',
    categoria: 'mammiferi'
  })
  console.log(res.status, res.data)
}

call2()