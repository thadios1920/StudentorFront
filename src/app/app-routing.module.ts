import { PostServiceOffComponent } from './online/user/post-service-off/post-service-off.component';
import { ServiceDemandeComponent } from './online/service-demande/service-demande.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './online/home/home.component';
import { PostServiceDemComponent } from './online/user/post-service-dem/post-service-dem.component';
import { EditPostComponent } from './online/user/edit-post/edit-post.component';
import { ProfilComponent } from './online/user/profil/profil.component';
import { Error404Component } from './error404/error404.component';
import { MessagerieComponent } from './online/messagerie/messagerie.component';
import { EditProfilComponent } from './online/user/edit-profil/edit-profil.component';

const routes: Routes = [
  {path:'servicesOff',component:HomeComponent},
  {path:'', redirectTo:'servicesOff', pathMatch:'full'},
  {path:'servicesDem',component:ServiceDemandeComponent},
  {path:'postservicesOff',component:PostServiceOffComponent},
  {path:'postservicesDem',component:PostServiceDemComponent},
  {path:'dashborad/edit-service/:id',component:EditPostComponent},
  {path:'dashborad/profil',component:ProfilComponent},
  {path:'dashborad/edit-profil/:id',component:EditProfilComponent},


  {path:'messagerie',component:MessagerieComponent},
  { path:'', redirectTo:'home',pathMatch:'full'},
  { path:'**',component:Error404Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
