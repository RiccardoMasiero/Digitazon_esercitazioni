import  express  from "express";
const app = express()
const port = 3000

import  bodyParser from 'body-parser'
app.use(bodyParser.json())

import * as album from './album-routes.mjs'

app.get('/albums', album.getAll)
app.get('/albums/:id', album.get)
app.post('/albums', album.create)
app.post('/albums/:id', album.createPhotos)
app.put('/albums/:id', album.update)
app.delete('/albums/:id', album.remove)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})