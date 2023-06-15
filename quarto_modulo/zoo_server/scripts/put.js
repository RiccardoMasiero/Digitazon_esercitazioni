import axios from 'axios'

async function call() {
    const res = await axios.put('http://localhost:3000/animali/4', {
        animale: "Coccodrillooo"
    })
    console.log(res.status)
}

call()