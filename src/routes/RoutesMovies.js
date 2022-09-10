import express from "express";
import { ControllerMovies } from "../controllers/Movies.js";

export const RoutesMovies = express.Router()

RoutesMovies.route("/get/all").get(ControllerMovies.GetAll)
RoutesMovies.route("/get/one/:id").get(ControllerMovies.GetOne)
RoutesMovies.route("/create/one").post(ControllerMovies.CreateOne)
RoutesMovies.route("/create/many").post(ControllerMovies.CreateMany)
RoutesMovies.route("/put/:id").put(ControllerMovies.UpdatePut)
RoutesMovies.route("/delete/one/:id").delete(ControllerMovies.DeleteOne)
RoutesMovies.route("/delete/many").delete(ControllerMovies.DeleteMany)
RoutesMovies.route("/patch/:id").patch(ControllerMovies.UpdatePatch)