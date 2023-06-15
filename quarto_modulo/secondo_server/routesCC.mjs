import caseCinematografiche from "./db/case_cinematografiche.json" assert { type: 'json' }
import film from "./db/film.json" assert { type: 'json' }
// devo fornire al server l'informazione dell'id piu' grande
// esistente all'interno di case-cinematografiche.json
// perche' abbiamo bisogno di tenerne traccia per via
// delle POST

// non lo faccio cosi perche' e' "debole" come implementazione
// potrebbe succedere che non c'e' un legame diretto
// tra posizione dell'i-esimo elemento e suo id
// const id = caseCinematografiche[caseCinematografiche.length - 1].id
let NEXT_ID = caseCinematografiche
  .reduce((bigger, c) => c.id > bigger ? c.id : bigger, -1)

const hello = (req, res) => {
  res.send('Hello World!')
}
const cCGet = (req, res) => {
  res.send(caseCinematografiche);
}
const cCResearch = (req, res) => {
  const caseFiltrate = []
  for (let i = 0; i < caseCinematografiche.length; i++) {
    if (caseCinematografiche[i].nome.includes(req.params.termine)) {
      caseFiltrate.push(caseCinematografiche[i])
    }
  }
  res.send(caseFiltrate);
}
const cCGetId = (req, res) => {
  for (let i = 0; i < caseCinematografiche.length; i++) {
    if (caseCinematografiche[i].id == req.params.id) {
      res.send(caseCinematografiche[i]);
      return
    }
  }
  res.status(404).end()
}
const cCDelete = (req, res) => {
  let index = -1

  for (let i = 0; i < caseCinematografiche.length; i++) {
    if (caseCinematografiche[i].id == req.params.id) {
      index = i
    }
  }
  if (index == -1) {
    res.status(404).end()
  } else {
    caseCinematografiche.splice(index, 1)

    for (let i = 0; i < film.length; i++) {
      if (req.params.id == film[i].casaProduzione) {
        film.splice(i, 1)
      }
    }
    res.status(200).end()
  }
}
const cCModify = (req, res) => {
  for (let i = 0; i < caseCinematografiche.length; i++) {
    if (caseCinematografiche[i].id == req.params.id) {
      caseCinematografiche[i] = { ...caseCinematografiche[i], ...req.body }
      res.status(200).end()
      return
    }
  }
  res.status(404).end()
}
const cCPost = (req, res) => {
  NEXT_ID++
  caseCinematografiche.push({ ...req.body, ...{ id: NEXT_ID } })
  res.status(200).end()

  //res.status(400).end()
}

export {
  hello, 
  cCGet, 
  cCResearch, 
  cCGetId, 
  cCDelete, 
  cCModify, 
  cCPost
}