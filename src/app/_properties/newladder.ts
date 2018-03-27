export class NewLadder {
  ladderName: string;
  creator: string;
  ladderType: string;
  visability: string;
  joinability: string;
  constructor(
    ladderName: string,
    creator: string,
    ladderType: string,
    visability: string,
    joinability: string) {

    this.ladderName = ladderName;
    this.creator = creator;
    this.ladderType = ladderType;
    this.visability = visability;
    this.joinability = joinability;
  }
  equals(other: NewLadder): boolean  {
    return this.ladderName === other.ladderName
    && this.creator === other.creator
    && this.ladderType === other.ladderType
    && this.visability === other.visability
    && this.joinability === other.joinability
  }
}
