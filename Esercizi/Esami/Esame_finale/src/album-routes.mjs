import fs from 'node:fs/promises'
import albums from '../db/albums.json' assert { type: 'json' }

const DB_PATH = './db/albums.json'


let NEXT = Object
  .keys(albums)
  .reduce((biggest, id) => biggest > id ? biggest : id, 0)

export const create = async (req, res) => {
    NEXT++
    albums[NEXT] = req.body
    await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  ')) 
    res
    .status(201)
    .send({
    message: 'album created'
    })

}

let NEXTPH = Object
  .keys(albums)
  .reduce((biggest, id) => biggest > id ? biggest : id, 0)

export const createPhotos = async (req, res) => {
    const albumId = req.params.id
    const album = albums[albumId]
    if (album && !album.cancelled) {
        let postDate = new Date();
        let NEXTPH = Object.keys(album.photos).reduce(
            (biggest, id) => biggest > id ? biggest : id, 0)
        NEXTPH++;
        const {nome,hastags} = req.body;
        const photo = {
            nome,
            hastags,
            data: postDate,
            urlPhoto: ''
        }
        album.photos[NEXTPH] = photo
        await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  ')) 
        res
        .status(201)
        .send({
        message: 'photo added'
        });
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'album not found'
        })
    }
}

// export const removePhotos = async (req, res) => {
// }

export const get =  (req,res) => {
    let album = albums[req.params.id]
    if (album) {
        res.send({data: album})
    }else {
        res.status
        res.send({
            data: {},
            error: true,
            message: 'album not found'
        })
    }
}

export const getAll =  (req,res) => {
    res.send(albums)
}

export const update = async (req,res) => {
    let album = albums[req.params.id]
    if (album) {
        let newAlbum = {...album, ...req.body}
        albums[req.params.id] = newAlbum
        await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '))
        res.send(newAlbum)
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'album not found'
        })
    }

}


export const remove = async  (req,res) => {
    let album= albums[req.params.id]
    if (album) {
        delete albums[req.params.id] 

        await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '))
        res.status(200).end()

    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'album not found'
        })
    }
}