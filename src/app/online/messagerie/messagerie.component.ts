import { User } from './../../models/user';
import { Message } from './../../models/message';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
messages:Message[]=[];
receivers:User[]=[];
rc:User[]=[];
u:User=new User();
cle:any;
val:string="";
isAvailable:boolean=false;
  constructor(private msgService: MessageService,private crud:CrudService ,private storage:TokenStorageService) { }

  getUser(id:string){
    this.crud.getUser(id).subscribe(
      data =>{this.u=data }
    )
  }

  contacter(id:any){

    this.getUser(id);
    this.msgService.messagesBetween(this.storage.getUser().id,id).subscribe(
      data => {
        this.messages = data;
      },
        (error:HttpErrorResponse)=>{
          alert(error.message)
        }
        );
        this.isAvailable=true;

  }
envoyer( id:any){
  this.getUser(id);
    this.msgService.envayerMsg(this.storage.getUser()._id,id,this.val).subscribe(
      data => {
        console.log(data);
        this.msgService.messagesBetween(this.storage.getUser()._id,id).subscribe(
          data => {
            this.messages = data;
            this.val=""
          },
            (error:HttpErrorResponse)=>{
              alert(error.message)
            }
            );
      },
        (error:HttpErrorResponse)=>{
          alert(error.message)
        }
        );

  }



  ngOnInit(): void {
    this.crud.getAllUsers().subscribe(
          data => {
            this.receivers = data
          },
            (error:HttpErrorResponse)=>{
              alert(error.message)
            }
            );


            this.crud.getAllUsers().subscribe(
              () => {
                this.rc = this.receivers.filter(l=>l.id!=this.storage.getUser()._id && l.isAdmin!=true )
              }
                );


  }


}