import { Plans } from "../models/Plans.js";
import { Users } from "../models/Users.js";

export const ControllerUsers = {
    
    async GetAll(request, response){
        try{
            // Pegando todos os usuarios e filtrando as colunas que vão ser retornadas
            const allUsers = await Users.findAll({include:{ model: Plans, attributes:{exclude: ['id']}}, attributes: {exclude: ['id','plan_id','password']}})
            response.status(200).json(allUsers)
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async GetOne(request, response){
        try{
            // Pegando o usuario pelo id e filtrando as colunas que vão ser retornadas
            const User = await Users.findOne({ where: { id:request.params.id  }, attributes: {exclude: ['id','plan_id','password']}, include:{ model: Plans, attributes:{exclude: ['id']}}})
            if (!User){
                throw new Error("User not found")
            }else{
                response.status(200).json(User)
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async CreateOne(request, response){
        try{
            await Users.create(request.body)
            response.status(200).send("User created successfully")
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async CreateMany(request, response){
        try{
            if (Array.isArray(request.body)){
                request.body.forEach(async element => await Users.create(element))
            }else{
                throw new Error("The object isn't a list")
            }
            response.status(200).send("Successfully created Users")
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async UpdatePut(request, response){
        try{
            if (Object.keys(request.body).length === 9){
                const User = await Users.findByPk(request.params.id)
                if (!User){
                    throw new Error("User not found")
                }else{
                    await User.update(request.body)
                    await User.save()
                    return response.status(201).send("User updated successfully")
                }
            }else{
                throw new Error("All User attributes required")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async UpdatePatch(request, response){
        try{
            console.log(request.body)
            if (Object.keys(request.body).length < 9){
                const User = await Users.findByPk(request.params.id)
                if (!User){
                    throw new Error("User not found")
                }else{
                    await User.update(request.body)
                    await User.save()
                    return response.status(201).send("User updated successfully")
                }
            }else{
                throw new Error("The amount of User attributes has been exceeded or reached the maximum amount")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async DeleteOne( request, response){
        try{
            const id = request.params.id
            const User = await Users.destroy({where: {id} })
            if (!User){
                throw new Error("User not found")
            }else{
                return response.status(201).send("User deleted successfully")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    // Dá para melhorar esse metodo
    // Verificar se não tem um ID que não existe antes de apagar, 
    // para retornar erro antes de começar apagar e evitar apagar parcialmente os filmes

    async DeleteMany(request, response) {
        try {
            if (Array.isArray(request.body.data.lista)) {
                try {
                    for (let i = 0; i < request.body.data.lista.length; i++) {
                        const id = request.body.data.lista[i]
                        const Ticket = await Users.findByPk(id)
                        if (!Ticket) {
                            throw new Error(`Ticket with id ${id} not found`)
                        } else {
                            await Ticket.destroy({ where: { id } })
                        }
                    }
                    response.status(201).send("Successfully deleted Users")
                } catch (e) {
                    response.status(404).send(e.message)
                }
            } else {
                throw new Error(`The object isn't a list but is ${request.body.data}`)
            }
        } catch (e) {
            response.status(400).send(e.message)
        }
    },
}
