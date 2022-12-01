import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private tokenStorage:TokenStorageService
  ) { }

  adminFooter:Boolean = false

  ngOnInit(): void {
    if (this.tokenStorage.getUser().isAdmin) {
      this.adminFooter = true
    }
  }

}
