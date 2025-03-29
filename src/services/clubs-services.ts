import { ClubModel } from "../models/club-model";
import { findAllClubs, findClubsById } from "../repositories/clubs-repository";
import { StatusCode } from "../utils/http-helper";

export const getAllClubsService = async () => {
  let status;
  const data: ClubModel[] = await findAllClubs()
  if (data) {
    status = StatusCode.OK;
  } else {
    status = StatusCode.noContent;
  }
  return { data, status };
};

export const getClubsByIdService = async (id : number) => {
  let status;
  const data : ClubModel | undefined = await findClubsById(id)
  if (data) {
    status = StatusCode.OK;
  } else {
    status = StatusCode.noContent;
  }
  return { data, status };
};
