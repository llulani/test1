import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'test1-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private userListService: UserService,
              private route: ActivatedRoute) {
    console.log("user detail constructed");
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userListService.getUser(id);
  }

  deleteSelected(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.userListService.deleteUser(id);
  }

}
