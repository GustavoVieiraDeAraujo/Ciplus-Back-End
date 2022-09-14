import { Tickets } from "../models/Tickets.js";

export const ControllerTickets = {
    
    async GetAll(request, response){
        try{
            const allTickets = await Tickets.findAll()
            response.status(200).json(allTickets)
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async GetOne(request, response){
        try{
            const Ticket = await Tickets.findByPk(request.params.id)
            if (!Ticket){
                throw new Error("Ticket not found")
            }else{
                response.status(200).json(Ticket)
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async CreateOne(request, response){
        try{
            await Tickets.create(request.body)
            response.status(200).send("Ticket created successfully")
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async CreateMany(request, response){
        try{
            if (Array.isArray(request.body)){
                request.body.forEach(async element => await Tickets.create(element))
            }else{
                throw new Error("The object isn't a list")
            }
            response.status(200).send("Successfully created Tickets")
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async UpdatePut(request, response){
        try{
            if (Object.keys(request.body).length === 7){
                const Ticket = await Tickets.findByPk(request.params.id)
                if (!Ticket){
                    throw new Error("Ticket not found")
                }else{
                    await Ticket.update(request.body)
                    await Ticket.save()
                    return response.status(201).send("Ticket updated successfully")
                }
            }else{
                throw new Error("All Ticket attributes required")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async UpdatePatch(request, response){
        try{
            console.log(request.body)
            if (Object.keys(request.body).length < 7){
                const Ticket = await Tickets.findByPk(request.params.id)
                if (!Ticket){
                    throw new Error("Ticket not found")
                }else{
                    await Ticket.update(request.body)
                    await Ticket.save()
                    return response.status(201).send("Ticket updated successfully")
                }
            }else{
                throw new Error("The amount of Ticket attributes has been exceeded or reached the maximum amount")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async DeleteOne( request, response){
        try{
            const id = request.params.id
            const Ticket = await Tickets.destroy({where: {id} })
            if (!Ticket){
                throw new Error("Ticket not found")
            }else{
                return response.status(201).send("Ticket deleted successfully")
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
            const array = request.params.ids.split("-")
            for (let i = 0; i < array.length; i++) {
                const id = array[i]
                const Ticket = await Tickets.findByPk(id)
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
    },
}
