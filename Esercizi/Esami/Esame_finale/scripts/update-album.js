import axios from 'axios'


async function call(id) {

    let putDate = new Date();
    let res = await axios.put(`http://localhost:3000/albums/${id}`, {
      hastags: '#montagne, #panorama, #aria-pulita',
      latestPutData: putDate 
    })
    console.log(res.status, res.data)
  }
  
  call(process.argv[2]) 