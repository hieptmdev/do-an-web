import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit {
  p=1;
  users: any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers(){
    this.userService.getAllUser().subscribe(data =>
      {
        this.users = data
      },
      error => console.log(error))
  }

}
