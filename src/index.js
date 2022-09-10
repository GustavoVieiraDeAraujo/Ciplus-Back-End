// importando bibliotecas
import cors from "cors";
import  express from "express";

// importando arquivo de geração e configuração do banco de dados
import { sequelize } from "./config/ConfigDataBase.js";

// conectar banco de dados com API
sequelize.sync().then(()=> console.log("Banco de dados conectado com sucesso"))

// Importando rotas
import { RoutesMovies } from "./routes/RoutesMovies.js";
import { RoutesPlans } from "./routes/RoutesPlans.js";
import { RoutesTickets } from "./routes/RoutesTickets.js";
import { RoutesUsers } from "./routes/RoutesUsers.js";

// Instanciar Express
const app =  express()

// Limitando usuarios da API
app.use(cors(
    {
    origin: "*"
    }
))

// Middleware
app.use(express.json())

// Aplicando rotas
app.use("/movies", RoutesMovies)
app.use("/plans", RoutesPlans)
app.use("/tickets", RoutesTickets)
app.use("/users", RoutesUsers)

// Definir porta que API vai rodar
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("API rodando na porta 3000"))
