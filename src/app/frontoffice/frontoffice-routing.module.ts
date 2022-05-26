import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./components/details/details.component";
import {TodoComponent} from "./components/todo/todo.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ChatComponent} from "./components/chat/chat.component";
const routes: Routes = [
  { path: 'chat', component: ChatComponent  },
  { path: 'profile', component: ProfileComponent  },
  { path: 'todo/:id', component: DetailsComponent  },
  { path: 'todo', component: TodoComponent  },
  { path: '', component: TodoComponent  }
];

@NgModule(
  {
    imports: [
      //enregistrer les routes on ne peut pas utiliser forRoot que dans AppModule
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ],
  }
)
export class FrontOfficeRoutingModule{

}
