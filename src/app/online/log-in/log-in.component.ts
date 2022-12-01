import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm!: FormGroup
                      constructor(private formBuilder: FormBuilder,
                                  private http: HttpClient,
                                  private router: Router,
                                  private crud:CrudService,
                                  private tokenStorage:TokenStorageService,
      ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required],
    })
  }

  

  login(){

    this.crud.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);

        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        if (this.tokenStorage.getUser().isAdmin) {
          alert('Bonjour admin:'+this.tokenStorage.getUser().prenom)
          this.router.navigate(["dashborad/admin"]) 
        }else {this.router.navigate(["dashborad/profil"]) }
        
      },
      err => {
        console.log(err);
      }
    );
}

// goToSignUp(){    
//   this.router.navigate(["signup"])
// }
reloadPage(): void {
  window.location.reload();
}
}
