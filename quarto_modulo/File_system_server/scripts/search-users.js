import  axios  from 'axios';

async function search (params){
    // caso limite params lungo 1
    if (params.length % 2 == 1) {
        console.log('params should be even')
        return
    }

    let path = 'http://localhost:3000/users/search?'
    let separator = ''
    for (let i = 0; i < params.length; i+=2) {
      path += `${separator}${params[i]}=${params[i+1]}`
      separator = '&'
    }

    let res = await axios.get (path)
    console.log(res.data);

}

let [a, b, ...params] = process.argv // Non metto process.argv[2] perchè qui posso mettere più di una cosa all'intenro della ricerca e cosi con questa funzione  gli dico di prendermi tutto quello che viene dal 2 in poi mentre i primi 2 argomenti di params me li salta 
// or also:
// console.log(process.argv.splice(2))

search(params)