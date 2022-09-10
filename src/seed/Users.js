import {Users} from "../models/Users.js"

await Users.create({
    "name":"Amanda Pereira da Silva",
    "age": 24,
    "birthday": "1996-05-18",
    "cell_phone_number": "(31) 98788-9999",
    "cpf":"899.999.999-91",
    "email":"amanda.silva@gmail.com",
    "password":"Am@nda9605",
    "amount_points": 500,
    "plan_id": 1
})

await Users.create({
    "name":"Luciane Diniz Oliveira",
    "age": 40,
    "birthday": "1982-03-21",
    "cell_phone_number": "(81) 97788-9919",
    "cpf":"199.999.999-92",
    "email":"luciane.diniz@yahoo.com",
    "password":"Oliveir@2103",
    "amount_points": 200,
    "plan_id": 2
})


await Users.create({
    "name":"Carlos Alberto da Silva",
    "age": 33,
    "birthday": "1989-01-08",
    "cell_phone_number": "(81) 98188-9912",
    "cpf":"119.999.999-91",
    "email":"carlos1989@gmail.com",
    "password":"Albertosilv@",
    "amount_points": 800,
    "plan_id": 3
})

await Users.create({
    "name":"Alexandre bastos",
    "age": 20,
    "birthday": "2002-03-21",
    "cell_phone_number":"(75) 99188-7565",
    "cpf":"089.456.999-04",
    "email":"ale21@gmail.com",
    "password":"al3bastos",
    "amount_points": 4500,
    "plan_id": 4
})

await Users.create({
    "name": "Luma",
    "age": 20,
    "birthday": "2003-03-08",
    "cell_phone_number":"(81) 97718-9919",
    "cpf":"087.145.321-04",
    "email":"luma.novo@gmail.com",
    "password":"Luma123",
    "amount_points": 10000,
    "plan_id": 3
})

await Users.create({
    "name": "Beatriz",
    "age": 20,
    "birthday": "2000-03-05",
    "cell_phone_number": "(25) 92345-1365",
    "cpf":"087.453.097-04",
    "email":"bia321@gmail.com",
    "password":"B1a123",
    "amount_points": 1300,
    "plan_id": 2
})
