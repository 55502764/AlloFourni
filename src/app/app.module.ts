import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component';
import { MaterielComponent } from './materiel/materiel.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondpageComponent,
    MenuComponent,
    ThirdpageComponent,
    FourthpageComponent,
    MaterielComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
