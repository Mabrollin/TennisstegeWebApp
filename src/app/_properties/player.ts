import { Ladder } from './ladder';
export class Player {
    ladders: Ladder[];
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export const PLAYERS = [
  {id: 1,
  firstName: "Markus1",
  lastName: "Brolin1",
  email: "brolin1.markus@gmail.com",
  phoneNumber: "0760359642"},
  {id: 2,
  firstName: "Markus2",
  lastName: "Brolin2",
  email: "brolin2.markus@gmail.com",
  phoneNumber: "0760359642"}
  ,{id: 3,
  firstName: "Markus3",
  lastName: "Brolin3",
  email: "brolin3.markus@gmail.com",
  phoneNumber: "0760359642"}
];
