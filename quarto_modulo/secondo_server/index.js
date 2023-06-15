import { 
  hello, 
  cCGet, 
  cCResearch, 
  cCGetId, 
  cCDelete, 
  cCModify, 
  cCPost,
} from './routesCC.mjs'

import { cCFilms, fFGet } from './routesFilm.mjs'
import express from 'express'
const app = express()
import  bodyParser from 'body-parser'
app.use(bodyParser.json())
const port = 3000


app.get('/', hello)

app.get('/case-cinematografiche', cCGet)
app.get('/case-cinematografiche/ricerca/:termine', cCResearch)
app.get('/case-cinematografiche/:id', cCGetId)

app.delete('/case-cinematografiche/:id', cCDelete)

app.put('/case-cinematografiche/:id', cCModify)

app.post("/case-cinematografiche", cCPost)

app.get('/case-cinematografiche/:id/films', cCFilms)
app.get('/films', fFGet)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
