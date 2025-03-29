import { Request, Response } from "express";
import * as PlayersServices from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getAllPlayers = async (req: Request, res: Response) => {
  const { data, status } = await PlayersServices.getPlayerAllPlayersService();

  res.status(status).json(data);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const { data, status } = await PlayersServices.getPlayerIdService(id);
  res.status(status).json(data);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body
  const { data, status } = await PlayersServices.createPlayerService(bodyValue);
  res.status(status).json(data)

};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { data, status } = await PlayersServices.deletePlayerService(id);
  res.status(status).json(data)
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue : StatisticsModel = req.body
  const { data, status } = await PlayersServices.updatePlayerService(id, bodyValue);
  res.status(status).json(data)
};
