import fs from 'node:fs/promises' //faccio /promises xkè alla riga 20 ne ho una
import todos from '../db/todos.json' assert { type: 'json' }
import todoUsers from '../db/todos-user.json' assert { type: 'json' }



const DB_PATH = './db/todos.json'
const DB_PATH_TODOS_USERS = './db/todos-user.json'



let NEXT = Object
  .keys(todos)
  .reduce((biggest, id) => biggest > id ? biggest : id, 0)  //NEXT parte da 0 perchè il db parte da un oggetto vuoto quindi il primo NEXT sarà 0

export const create = async (req, res) => {
NEXT++
todos[NEXT] = req.body

// never use sync, go the async way
// fs.writeFileSync(DB_PATH, JSON.stringify(users, null, '  '))

await fs.writeFile(DB_PATH, JSON.stringify(todos, null, '  '))  //Questa riga permette il salvataggio nel file system!!!
                                                                //Questo await non blocca perchè è una cosa asincrona
res
    .status(201)
    .send({
    message: 'todo created'
    })
}

export const get =  (req,res) => {
    let todo = todos[req.params.id]
    if (todo) {
        res.send({data: todo})
    }else {
        res.status
        res.send({
            data: {},
            error: true,
            message: 'todo not found'
        })
    }
}

export const getAll =  (req,res) => {
  res.send(todos)
}

export const update = async (req,res) => {
    let todo = todos[req.params.id]
    if (todo) {
        let newTodo = {...todo, ...req.body}
        todos[req.params.id] = newTodo
        await fs.writeFile(DB_PATH, JSON.stringify(todos, null, '  '))
        res.send(newTodo)
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'todo not found'
        })
    }

}

export const search = async (req,res) => {
  const query = req.query
    let filtered = Object.values(users)
        .filter(u => u.name === query.title)
    res.send(filtered)
}

export const remove = async  (req,res) => {
    let todo = todos[req.params.id]
    if (todo) {
        delete todos[req.params.id] 
        Object.keys(todoUsers).forEach(idut => {
            let split = idut.split("-")
            if(split[1] == req.params.id){
              delete todoUsers[idut]
            }
          })

    await fs.writeFile(DB_PATH_TODOS_USERS, JSON.stringify(todoUsers, null, '  '))




        await fs.writeFile(DB_PATH, JSON.stringify(todos, null, '  '))
        res.status(200).end()
    } else {
        res.status(200)
        res.send({
            data: {},
            error: true,
            message: 'todo not found'
        })
    }

}