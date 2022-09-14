import express from "express";
import { ControllerUsers } from "../controllers/Users.js";

export const RoutesUsers = express.Router()

RoutesUsers.route("/get/all").get(ControllerUsers.GetAll)
RoutesUsers.route("/get/one/:id").get(ControllerUsers.GetOne)
RoutesUsers.route("/create/one").post(ControllerUsers.CreateOne)
RoutesUsers.route("/create/many").post(ControllerUsers.CreateMany)
RoutesUsers.route("/put/:id").put(ControllerUsers.UpdatePut)
RoutesUsers.route("/delete/one/:id").delete(ControllerUsers.DeleteOne)
RoutesUsers.route("/delete/many/:ids").delete(ControllerUsers.DeleteMany)
RoutesUsers.route("/patch/:id").patch(ControllerUsers.UpdatePatch)
