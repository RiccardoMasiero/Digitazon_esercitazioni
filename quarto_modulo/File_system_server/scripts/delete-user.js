import  axios  from 'axios';

async function call (id){
    let res = await axios.delete (`http://localhost:3000/users/${id}`) //Qui metto backtic e ${id}
    console.log(res.status,res.data);

}

call(process.argv[2]) //Mettendo questo e specificando (id) come argomento della funzione call 
                      //posso scrivere direttamente il numero dell'id sul quale voglio operare sul terminale.
