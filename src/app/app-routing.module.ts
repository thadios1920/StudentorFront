import { ServiceDemandeComponent } from './online/service-demande/service-demande.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './online/home/home.component';

const routes: Routes = [
  {path:'servicesOff',component:HomeComponent},
  {path:'', redirectTo:'servicesOff', pathMatch:'full'},
  {path:'servicesDem',component:ServiceDemandeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
