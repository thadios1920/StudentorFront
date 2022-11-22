import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './online/home/home.component';
import { HeaderComponent } from './online/header/header.component';
import { FooterComponent } from './online/footer/footer.component';
import { ServiceDemandeComponent } from './online/service-demande/service-demande.component';
import { HttpClientModule } from '@angular/common/http';
import { PostServiceOffComponent } from './online/user/post-service-off/post-service-off.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './online/user/profil/profil.component';
import { EditPostComponent } from './online/user/edit-post/edit-post.component';
import { PostServiceDemComponent } from './online/user/post-service-dem/post-service-dem.component';
import { Error404Component } from './error404/error404.component';
import { MessagerieComponent } from './online/messagerie/messagerie.component';
import { EditProfilComponent } from './online/user/edit-profil/edit-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServiceDemandeComponent,
    PostServiceOffComponent,
    ProfilComponent,
    EditPostComponent,
    PostServiceDemComponent,
    Error404Component,
    MessagerieComponent,
    EditProfilComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
