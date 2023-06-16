import  axios  from 'axios';

async function call (id){
    const url = id ? `http://localhost:3000/albums/${id}` : 'http://localhost:3000/albums'
    let res = await axios.get (url)
    console.log(res.status,res.data);

}

call(process.argv[2])