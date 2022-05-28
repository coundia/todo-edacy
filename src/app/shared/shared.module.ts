import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RelativeTimePipe,
    PluralizePipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RelativeTimePipe,
    PluralizePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot()

  ]
})
export class SharedModule {
}
