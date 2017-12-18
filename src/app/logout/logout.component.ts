import { Component } from '@angular/core';
import { UserSessionService } from '../_services/usersessionservice';
import { Router} from '@angular/router';
import { User } from '../_properties/user';

@Component({
  selector: 'logout',
  moduleId: module.id,
  styleUrls: ['./logout.css'],
  templateUrl: './logout.html',
  providers: [UserSessionService],
})

export class Logout{
constructor(private userSessionService: UserSessionService, private router: Router) { }
  ngOnInit(){
    this.userSessionService.logout();
      this.router.navigate(['/options']);
  }
}
