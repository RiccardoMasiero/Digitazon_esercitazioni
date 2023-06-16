import axios from 'axios'

async function call() {
    
    let postDate = new Date();
    let res = await axios.post('http://localhost:3000/albums', {
    nome: 'Foto-spiaggia',
    hastags: '#spiaggia, #sabbia, #caldo',
    data: postDate, //sistema di tempo standard UTC utilizzato in tutto il mondo
    photos: {}
    
  })
  console.log(res.status, res.data)
}

call()