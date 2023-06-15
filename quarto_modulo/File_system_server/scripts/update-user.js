import axios from 'axios'


async function call(id) {
    let res = await axios.put(`http://localhost:3000/users/${id}`, {
      name: 'Marie',
      surname: 'Curie'
    })
    console.log(res.status, res.data)
  }
  
  call(process.argv[2]) 