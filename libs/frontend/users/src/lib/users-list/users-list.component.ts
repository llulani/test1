import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'test1-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy  {

  users: User[];
  sub: Subscription;

  constructor(private userListService: UserService) { 
    console.log("user list constructed");
  }

  
  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe;
    }
  }

  

  getUsers(): void {
    this.sub = this.userListService.getList().subscribe(res => {this.users = res;});
  }
}
