export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nation: string;
  position: string;
  statistics: {
    overall: number;
    pace: number;
    shot: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
}
