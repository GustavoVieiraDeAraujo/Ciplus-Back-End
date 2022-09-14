import { Plans } from "../models/Plans.js";
import { Users } from "../models/Users.js";

export const ControllerPlans = {
    
    async GetAll(request, response){
        try{
            // Pegando todos os planos e filtrando as colunas que vão ser retornadas
            const allPlans = await Plans.findAll({include:{ model: Users, attributes:{exclude: ['id','plan_id','password']}}, attributes: {exclude: ["id"]}})
            response.status(200).json(allPlans)
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async GetOne(request, response){
        try{
            // Pegando o plano pelo id e filtrando as colunas que vão ser retornadas
            const Plan = await Plans.findOne({ where: { id:request.params.id  }, attributes: {exclude: ['id']}, include:{ model: Users, attributes:{exclude: ['id','plan_id','password']}}})
            if (!Plan){
                throw new Error("Plan not found")
            }else{
                response.status(200).json(Plan)
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async CreateOne(request, response){
        try{
            await Plans.create(request.body)
            response.status(200).send("Plan created successfully")
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async CreateMany(request, response){
        try{
            if (Array.isArray(request.body)){
                request.body.forEach(async element => await Plans.create(element))
            }else{
                throw new Error("The object isn't a list")
            }
            response.status(200).send("Successfully created Plans")
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async UpdatePut(request, response){
        try{
            if (Object.keys(request.body).length === 7){
                const Plan = await Plans.findByPk(request.params.id)
                if (!Plan){
                    throw new Error("Plan not found")
                }else{
                    await Plan.update(request.body)
                    await Plan.save()
                    return response.status(201).send("Plan updated successfully")
                }
            }else{
                throw new Error("All Plan attributes required")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async UpdatePatch(request, response){
        try{
            console.log(request.body)
            if (Object.keys(request.body).length < 7){
                const Plan = await Plans.findByPk(request.params.id)
                if (!Plan){
                    throw new Error("Plan not found")
                }else{
                    await Plan.update(request.body)
                    await Plan.save()
                    return response.status(201).send("Plan updated successfully")
                }
            }else{
                throw new Error("The amount of Plan attributes has been exceeded or reached the maximum amount")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async DeleteOne( request, response){
        try{
            const id = request.params.id
            const Plan = await Plans.destroy({where: {id} })
            if (!Plan){
                throw new Error("Plan not found")
            }else{
                return response.status(201).send("Plan deleted successfully")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },


    // Dá para melhorar esse metodo
    // Verificar se não tem um ID que não existe antes de apagar, 
    // para retornar erro antes de começar apagar e evitar apagar parcialmente os filmes

    async DeleteMany(request, response){
        try{
            if (Array.isArray(request.body.lista)){
                try{
                    for (let i = 0; i< request.body.lista.length; i++){
                        const id = request.body.lista[i]
                        const Plan = await Plans.findByPk(id)
                        if (!Plan){
                            throw new Error(`Plan with id ${id} not found`)
                        }else{
                            await Plan.destroy({where: {id}})
                        }
                    }
                    response.status(201).send("Successfully deleted Plans")
                }catch(e){
                    response.status(404).send(e.message)
                }
            }else{
                throw new Error("The object isn't a list")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },
}
