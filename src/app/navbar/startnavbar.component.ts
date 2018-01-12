import { Component } from '@angular/core';
import { navbarAnimation } from '../_animations';
@Component({
  selector: 'startnavbar',
  moduleId: module.id,
  animations: [navbarAnimation],
  styleUrls: ['./navbar.css'],
  templateUrl: './startnavbar.html',
})

export class StartNavbar{
}
