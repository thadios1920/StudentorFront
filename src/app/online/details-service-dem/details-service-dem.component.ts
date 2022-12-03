import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicesdem } from 'src/app/models/servicesdem';
import { Servicesoff } from 'src/app/models/servicesoff';
import { CrudService } from 'src/app/services/crud.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-details-service-dem',
  templateUrl: './details-service-dem.component.html',
  styleUrls: ['./details-service-dem.component.css'],
})
export class DetailsServiceDemComponent implements OnInit {
  constructor(
    private crud: CrudService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  idSub: number = 0;
  sub: string | any = '';

  ServiceOffert!: Servicesoff;
  ServiceDem!: Servicesdem;

  imageURL: string = this.tokenStorage.getUser().image;
  name: string = this.tokenStorage.getUser().nom;
  lastname: string = this.tokenStorage.getUser().prenom;
  profession: string = this.tokenStorage.getUser().profession;

  ngOnInit(): void {
    this.sub = this.route.snapshot.paramMap.get('id');

    this.crud.getServiceDemandeByIdt(this.sub).subscribe((data) => {
      this.ServiceDem = data;
    });
  }
}
