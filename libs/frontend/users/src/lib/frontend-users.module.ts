import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { User } from "./user";

@NgModule({
  imports: [CommonModule],
  exports: [FrontendUsersModule],
  declarations: [
    UsersListComponent, 
    UserDetailComponent],
})
export class FrontendUsersModule {}
