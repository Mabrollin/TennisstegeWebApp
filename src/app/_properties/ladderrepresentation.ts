import { LadderPlayer } from './';
import { Challenge } from './';
import { Record } from './';
export class LadderRepresentation{
  ladderName: string;
  players: LadderPlayer[];
  challenges: Challenge[];
  records: Record[];
  constructor() {
    this.ladderName = "";
    this.players = [];
    this.challenges = [];
    this.records = [];

  }

}
