import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './online/home/home.component';
import { HeaderComponent } from './online/header/header.component';
import { FooterComponent } from './online/footer/footer.component';
import { ServiceDemandeComponent } from './online/service-demande/service-demande.component';
import { HttpClientModule } from '@angular/common/http';
import { PostServiceOffComponent } from './online/post-service-off/post-service-off.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServiceDemandeComponent,
    PostServiceOffComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
