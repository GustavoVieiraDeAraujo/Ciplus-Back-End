import {Tickets} from "../models/Tickets.js"

await Tickets.create({
    'type':"bronze",
    'price': 1500,
    'description':"Acesso à sala bronze",
    'score': 5
})

await Tickets.create({
    'type':"prata",
    'price': 2500,
    'description':"Acesso à sala prata",
    'score': 10
})


await Tickets.create({
    'type':"gold",
    'price': 3500,
    'description':"Acesso à sala gold",
    'score': 15
})


await Tickets.create({
    'type':"platina",
    'price': 4500,
    'description':"Acesso à sala platina",
    'score': 20
})


await Tickets.create({
    'type':"diamante",
    'price': 5500,
    'description':"Acesso à sala diamante",
    'score': 25
})
