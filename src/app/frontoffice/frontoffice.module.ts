import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from './components/chat/chat.component';
import {DetailsComponent} from './components/details/details.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {TodoComponent} from './components/todo/todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FrontOfficeRoutingModule} from "./frontoffice-routing.module";


@NgModule({
  declarations: [
    ChatComponent,
    DetailsComponent,
    HomeComponent,
    ProfileComponent,
    TodoComponent
  ],
  exports: [
    ChatComponent,
    DetailsComponent,
    HomeComponent,
    ProfileComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontOfficeRoutingModule,
    ReactiveFormsModule
  ]
})
export class FrontofficeModule {
}
