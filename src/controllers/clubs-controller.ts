import { Request, Response } from "express";
import {
  getAllClubsService,
  getClubsByIdService,
} from "../services/clubs-services";

export const getAllClubs = async (req: Request, res: Response) => {
  const { data, status } = await getAllClubsService();

  res.status(status).json(data);
};

export const getClubsById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { data, status } = await getClubsByIdService(id);

  res.status(status).json(data);
};
