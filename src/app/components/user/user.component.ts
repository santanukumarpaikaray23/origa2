import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      console.log(response)
      this.users=response

    })

  }

}
