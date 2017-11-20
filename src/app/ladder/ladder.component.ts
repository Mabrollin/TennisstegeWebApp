import { Component } from '@angular/core';
import { LadderPlayer } from "./ladderplayer.component";
import { Player, PLAYERS } from "../_properties/player";

@Component({
  selector: 'ladder',
  moduleId: module.id,
  styleUrls: ['./ladder.css'],
  templateUrl: './ladder.html',
})

export class Ladder{
  //players: Player[];
  players = PLAYERS;
}
