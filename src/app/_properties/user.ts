import { LadderParticipation } from "./ladderParticipation";
import { ContactInfo } from "./ContactInfo";
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
