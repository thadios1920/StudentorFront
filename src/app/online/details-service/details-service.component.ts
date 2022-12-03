import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Servicesoff } from 'src/app/models/servicesoff';
import { CrudService } from 'src/app/services/crud.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.component.html',
  styleUrls: ['./details-service.component.css'],
})
export class DetailsServiceComponent implements OnInit {
  constructor(
    private crud: CrudService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  idSub: number = 0;
  sub: string | any = '';

  ServiceOffert!: Servicesoff;
  getServiceDem!: Subscription;
  getServiceOffert!: Subscription;

  imageURL: string = this.tokenStorage.getUser().image;
  name: string = this.tokenStorage.getUser().nom;
  lastname: string = this.tokenStorage.getUser().prenom;
  profession: string = this.tokenStorage.getUser().profession;

  ngOnInit(): void {
    this.sub = this.route.snapshot.paramMap.get('id');

    this.crud.getServiceOfferByIdt(this.sub).subscribe((data) => {
      this.ServiceOffert = data;
    });
  }
}
