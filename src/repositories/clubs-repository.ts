import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(await data);
  return clubs;
};

export const findClubsById = async (id : number) : Promise<ClubModel | undefined> => {
  const data = fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(await data);
  return clubs.find((club) => club.id === id);
};
1