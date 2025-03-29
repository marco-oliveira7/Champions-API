import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nation: "Argentina",
    position: "Forward",
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
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nation: "Portugal",
    position: "Forward",
    statistics: {
      overall: 89,
      pace: 84,
      shot: 93,
      passing: 82,
      dribbling: 85,
      defending: 41,
      physical: 78,
    },
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nation: "France",
    position: "Forward",
    statistics: {
      overall: 92,
      pace: 98,
      shot: 90,
      passing: 85,
      dribbling: 94,
      defending: 42,
      physical: 78,
    },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nation: "Belgium",
    position: "Midfielder",
    statistics: {
      overall: 91,
      pace: 76,
      shot: 88,
      passing: 94,
      dribbling: 88,
      defending: 60,
      physical: 78,
    },
  },
  {
    id: 5,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nation: "Netherlands",
    position: "Defender",
    statistics: {
      overall: 90,
      pace: 78,
      shot: 60,
      passing: 75,
      dribbling: 70,
      defending: 92,
      physical: 89,
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
    return true
  }
  return false

};

export const findAndModifyPlayer = async (id: number, statistics : StatisticsModel) => {
  const player = database.findIndex((p) => p.id === id)
  
  if(player !== -1){
    database[player].statistics = statistics
  }
}