import animali from "../db/animali.json" assert { type: 'json' }

let NEXT_ID = animali
  .reduce((bigger, a) => a.id > bigger ? a.id : bigger, -1)

const hello = (req, res) => {
    res.send('Zoo server')
}

const animaliGet = (req, res) => {
    res.send(animali);
}

const animaliGetId = (req, res) => {
  for (let i = 0; i < animali.length; i++) {
    if (animali[i].id == req.params.id) {
      res.send(animali[i]);
      return
    }
  }
  res.status(404).end()
}

const animaliResearch = (req, res) => {
  const animaliFiltrati = []
  for (let i = 0; i < animali.length; i++) {
    if (animali[i].animale.includes(req.params.termine)) {
      animaliFiltrati.push(animali[i])
    }
  }
  res.send(animaliFiltrati);
}

const animaliModify = (req, res) => {
  for (let i = 0; i < animali.length; i++) {
    if (animali[i].id == req.params.id) {
      animali[i] = { ...animali[i], ...req.body }
      res.status(200).end()
      return
    }
  }
  res.status(404).end()
}



const animaliPost = (req, res) => {
  NEXT_ID++
  animali.push({ ...req.body, ...{ id: NEXT_ID } })
  res.status(200).end()

  //res.status(400).end()
}

const animaliDelete = (req, res) => {
    let index = -1
  
    for (let i = 0; i < animali.length; i++) {
      if (animali[i].id == req.params.id) {
        index = i
      }
    }
    if (index == -1) {
      res.status(404).end()
    } else {
      animali.splice(index, 1)
      res.status(200).end()
    }
}





export {
    hello,
    animaliGet,
    animaliGetId,
    animaliPost,
    animaliDelete,
    animaliResearch,
    animaliModify
}