import { LadderParticipation } from "./ladderparticipation";
import { ContactInfo } from "./contactinfo";
export class User {
  constructor(){
    this.ladderParticipation = [];
    this.username = "";
    this.contactInfo = new ContactInfo();
  }
    ladderParticipation: LadderParticipation[];
    username: string;
    contactInfo: ContactInfo;
}
