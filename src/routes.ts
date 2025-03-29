import { Router } from "express";
import * as PlayersControllers from "./controllers/players-controller";
import { getAllClubs, getClubsById } from "./controllers/clubs-controller";

const router = Router()

router.get("/players", PlayersControllers.getAllPlayers)
router.post("/players", PlayersControllers.postPlayer)
router.delete("/players/:id", PlayersControllers.deletePlayer)
router.patch("/players/:id", PlayersControllers.updatePlayer)
router.get("/players/:id", PlayersControllers.getPlayerById)

router.get("/clubs", getAllClubs)
router.get("/clubs/:id", getClubsById)

export default router
