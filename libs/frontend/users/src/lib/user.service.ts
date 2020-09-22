import { Injectable } from '@angular/core';
import {  Get, Post, Delete } from '@nestjs/common';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import { Observable } from 'rxjs';



const usersURL = 'http://localhost:3333/api/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
    this.getList();
   }

  @Get()
  getList(): Observable<User[]>{
    return this.http.get<User[]>(usersURL);
  }

  @Get()
  getUser(id: number): Observable<User>{
    return this.http.get<User>('${usersURL}/${id}');
  }

  @Delete()
  deleteUser(id: number){
    this.http.delete('${usersURL}/${id}').subscribe(
      res => {console.log(res)},
      err => {console.log(err)
  });
  }

  @Post()
  postUser(user:User){
    this.http.post(usersURL, user).subscribe(
      res => {console.log(res);}, 
      err => {console.log(err);});
  }
}
