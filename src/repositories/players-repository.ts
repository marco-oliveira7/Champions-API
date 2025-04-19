import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nation: "Argentina",
    position: "RW",
    img: "https://fifastatic.fifaindex.com/FIFA24/players/158023.png",
    statistics: {
      overall: 91,
      pace: 85,
      shot: 92,
      passing: 91,
      dribbling: 95,
      defending: 38,
      physical: 65,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerId = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  const existentPlayer = database.find((p) => p.id === player.id);
  let message = "";
  if (existentPlayer) {
    message = "This player already exist";
  } else {
    database.push(player);
    message = "Sucessfull";
  }
  return message;
};

export const deletePlayerId = async (id: number) => {
  const index = database.findIndex((p) => p.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
) => {
  const player = database.findIndex((p) => p.id === id);

  if (player !== -1) {
    database[player].statistics = statistics;
  }
};
