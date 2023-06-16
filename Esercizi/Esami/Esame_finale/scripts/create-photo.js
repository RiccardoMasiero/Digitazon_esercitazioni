import axios from 'axios'

async function call(id) {

    let postDate = new Date();
    let res = await axios.post(`http://localhost:3000/albums/${id}`, {
    nome: 'Foto montagna Cortina ',
    hastags: '#Montagna, #libertà',
    data: postDate,
    urlPhoto: ''
  })
  console.log(res.status, res.data)
}

call(process.argv[2])