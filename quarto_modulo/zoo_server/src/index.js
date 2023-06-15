import {
  hello,
  animaliGet,
  animaliPost,
  animaliDelete,
  animaliResearch,
  animaliModify,
  animaliGetId

} from './routesAnimali.mjs'

import  express  from "express";
import cors from 'cors'
const app = express()
app.use(cors({
  origin: "http://localhost:3000",
}))
import  bodyParser from 'body-parser'
app.use(bodyParser.json())
const port = 3000

app.get('/', hello)

app.get('/animali', animaliGet)
app.get('/animali/ricerca/:termine', animaliResearch)
app.get('/animali/:id', animaliGetId)


app.post('/animali', animaliPost)

app.put('/animali/:id', animaliModify)

app.delete('/animali/:id', animaliDelete)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})