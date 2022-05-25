import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';



@NgModule({
  declarations: [
    ChatComponent,
    DetailsComponent,
    HomeComponent,
    ProfileComponent,
    TodoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrontofficeModule { }
