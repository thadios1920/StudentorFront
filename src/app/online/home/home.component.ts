import { Servicesdem } from './../../models/servicesdem';
import { Servicesoff } from './../../models/servicesoff';
import { Observable } from 'rxjs';
import { CrudService } from './../../services/crud.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private crud:CrudService ) { }

  listUser : User[]=[]   
  listService : Servicesdem[]=[]

  ngOnInit(): void {
    this.crud.getAllUsers()
    .subscribe( data => {this.listUser = data;
    });
    
    for (let index = 0; index < this.listUser.length; index++) {
      this.listService[index]=this.listUser[index].servicesdem
    }
    console.log(this.listService);
    
  }

}
