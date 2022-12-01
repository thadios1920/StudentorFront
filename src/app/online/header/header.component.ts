import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenStorage:TokenStorageService,
    private router: Router,

  ) { }
  isLoged:Boolean=false
adminHeader:Boolean=false

userStorage = this.tokenStorage.getUser() 

onLogOut(){
  this.tokenStorage.signOut()
  // window.location.reload();
 
  this.router.navigate(["/logIn"]) 
}

  ngOnInit(): void {
    if (this.tokenStorage.getUser().isAdmin) {
      this.adminHeader = true
    }

  if (window.sessionStorage.length !== 0) {
    this.isLoged = true
  }
   console.log(window.sessionStorage.length);
   console.log(this.isLoged);
   console.log("status"+this.tokenStorage.getUser().isAdmin);
  }

}
