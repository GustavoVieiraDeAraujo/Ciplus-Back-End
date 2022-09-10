import express from "express";
import { ControllerPlans } from "../controllers/Plans.js";

export const RoutesPlans = express.Router()

RoutesPlans.route("/get/all").get(ControllerPlans.GetAll)
RoutesPlans.route("/get/one/:id").get(ControllerPlans.GetOne)
RoutesPlans.route("/create/one").post(ControllerPlans.CreateOne)
RoutesPlans.route("/create/many").post(ControllerPlans.CreateMany)
RoutesPlans.route("/put/:id").put(ControllerPlans.UpdatePut)
RoutesPlans.route("/delete/one/:id").delete(ControllerPlans.DeleteOne)
RoutesPlans.route("/delete/many").delete(ControllerPlans.DeleteMany)
RoutesPlans.route("/patch/:id").patch(ControllerPlans.UpdatePatch)