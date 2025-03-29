import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as RepoPlayers from "../repositories/players-repository";
import { StatusCode } from "../utils/http-helper";

export const getPlayerAllPlayersService = async () => {
  const data = await RepoPlayers.findAllPlayers();
  let status = 0;

  if (data) {
    status = StatusCode.OK;
  } else {
    status = StatusCode.noContent;
  }

  return { data, status };
};

export const getPlayerIdService = async (id: number) => {
  const data = await RepoPlayers.findPlayerId(id);
  let status = 0;

  if (data) {
    status = StatusCode.OK;
  } else {
    status = StatusCode.noContent;
  }

  return { data, status };
};

export const createPlayerService = async (player: PlayerModel) => {
  let status = 0;
  let data;

  if (Object.keys(player).length !== 0) {
    status = StatusCode.created;
    data = await RepoPlayers.insertPlayer(player);
  } else {
    status = StatusCode.badRequest;
  }

  return { data, status };
};

export const deletePlayerService = async (id: number) => {
  const isDeleted = await RepoPlayers.deletePlayerId(id);
  let status;
  let data;
  if (isDeleted) {
    data = {message: "Deleted"};
    status = StatusCode.OK;
  }else{
    data = {message: "Not Found"};
    status = StatusCode.badRequest
  }

  return { data, status };
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  let status = StatusCode.OK;
  let data = await RepoPlayers.findAndModifyPlayer(id, statistics);
  if (Object.keys(statistics).length !== 0) {
    status = StatusCode.created;
    data = await RepoPlayers.findAndModifyPlayer(id, statistics);
  } else {
    status = StatusCode.badRequest;
  }

  return { data, status };
};
