const express = require('express')
const app = express()
const port = 3000

const caseCinematografiche = require("./case_cinematografiche.json")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/case-cinematografiche', (req, res) => {
  res.send(caseCinematografiche);
})

app.get('/case-cinematografiche/ricerca/:termine', (req, res) => {
  const caseFiltrate = []
  /*
  a partire da un array di oggetti dobbiamo prendere il termine 
  Usiamo un for per ciclare sull'array di oggetti 
  */
  for(let i=0; i < caseCinematografiche.length; i++){
    if(caseCinematografiche[i].nome.includes(req.params.termine)){
      caseFiltrate.push(caseCinematografiche[i])
    }
  }
  res.send(caseFiltrate);
})

app.delete('/case-cinematografiche/:id', (req, res) => {
  let index = -1

  for(let i=0; i < caseCinematografiche.length; i++){
    if(caseCinematografiche[i].id == req.params.id){
      index = i
    }
  }
  if(index == -1){
      res.status(404).end()
  }else{
      caseCinematografiche.splice(index, 1)
      res.status(200).end()
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})