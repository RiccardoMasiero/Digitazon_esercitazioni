import axios from 'axios'

async function call() {
  let res = await axios.post('http://localhost:3000/todos', {
    title: 'Wash the car'
  })
  console.log(res.status, res.data)
}

call()