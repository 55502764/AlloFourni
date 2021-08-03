import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

const routes: Routes = [{path:'accueil', component:FirstPageComponent},
{path:'Validation', component:SecondpageComponent},
{path:'creation',component:ThirdpageComponent},
{path:'boutique',component:FourthpageComponent},
{path:'boutique/:yy',component:DetailComponent},

{path:'', redirectTo:'accueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
