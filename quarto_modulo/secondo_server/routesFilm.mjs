import caseCinematografiche from "./db/case_cinematografiche.json" assert { type: 'json' }
import film from "./db/film.json" assert { type: 'json' }

const cCFilms = (req, res) => {  
    const filtered = film.filter((f) => f.casaProduzione == req.params.id)
    console.log(film, typeof req.params.id, filtered)
    res.send(filtered)
}

const fFGet =(req, res) =>{

    res.send(film)
}

export {
    cCFilms,
    fFGet
}
