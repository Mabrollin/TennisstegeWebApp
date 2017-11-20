import { Component, Input } from '@angular/core';
import { Player } from "../_properties/player";

@Component({
  selector: 'ladderplayer',
  moduleId: module.id,
  styleUrls: ['./ladderplayer.css'],// 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'],
  templateUrl: './ladderplayer.html',
})

export class LadderPlayer{
    @Input() player: Player;
    @Input() position: number;
}
