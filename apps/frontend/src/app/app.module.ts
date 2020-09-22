import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrontendUsersModule } from "@test1/frontend/users";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FrontendUsersModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
