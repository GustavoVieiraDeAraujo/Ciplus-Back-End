import express from "express";
import { ControllerTickets } from "../controllers/Tickets.js";

export const RoutesTickets = express.Router()

RoutesTickets.route("/get/all").get(ControllerTickets.GetAll)
RoutesTickets.route("/get/one/:id").get(ControllerTickets.GetOne)
RoutesTickets.route("/create/one").post(ControllerTickets.CreateOne)
RoutesTickets.route("/create/many").post(ControllerTickets.CreateMany)
RoutesTickets.route("/put/:id").put(ControllerTickets.UpdatePut)
RoutesTickets.route("/delete/one/:id").delete(ControllerTickets.DeleteOne)
RoutesTickets.route("/delete/many").delete(ControllerTickets.DeleteMany)
RoutesTickets.route("/patch/:id").patch(ControllerTickets.UpdatePatch)