import { Movies } from "../models/Movies.js";

export const ControllerMovies = {
    
    async GetAll(request, response){
        try{
            const allMovies = await Movies.findAll()
            response.status(200).json(allMovies)
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async GetOne(request, response){
        try{
            const Movie = await Movies.findByPk(request.params.id)
            if (!Movie){
                throw new Error("Movie not found")
            }else{
                response.status(200).json(Movie)
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async CreateOne(request, response){
        try{
            await Movies.create(request.body)
            response.status(200).send("Movie created successfully")
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async CreateMany(request, response){
        try{
            if (Array.isArray(request.body)){
                request.body.forEach(async element => await Movies.create(element))
            }else{
                throw new Error("The object isn't a list")
            }
            response.status(200).send("Successfully created movies")
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async UpdatePut(request, response){
        try{
            if (Object.keys(request.body).length === 7){
                const Movie = await Movies.findByPk(request.params.id)
                if (!Movie){
                    throw new Error("Movie not found")
                }else{
                    await Movie.update(request.body)
                    await Movie.save()
                    return response.status(201).send("Movie updated successfully")
                }
            }else{
                throw new Error("All movie attributes required")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async UpdatePatch(request, response){
        try{
            console.log(request.body)
            if (Object.keys(request.body).length < 7){
                const Movie = await Movies.findByPk(request.params.id)
                if (!Movie){
                    throw new Error("Movie not found")
                }else{
                    await Movie.update(request.body)
                    await Movie.save()
                    return response.status(201).send("Movie updated successfully")
                }
            }else{
                throw new Error("The amount of movie attributes has been exceeded or reached the maximum amount")
            }
        }catch(e){
            response.status(400).send(e.message)
        }
    },

    async DeleteOne( request, response){
        try{
            const id = request.params.id
            const Movie = await Movies.destroy({where: {id} })
            if (!Movie){
                throw new Error("Movie not found")
            }else{
                return response.status(201).send("Movie deleted successfully")
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
            if (Array.isArray(request.body)){
                try{
                    for (let i = 0; i< request.body.length; i++){
                        const id = request.body[i]
                        const Movie = await Movies.findByPk(id)
                        if (!Movie){
                            throw new Error(`Movie with id ${id} not found`)
                        }else{
                            await Movie.destroy({where: {id}})
                        }
                    }
                    response.status(201).send("Successfully deleted movies")
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
