import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { Subscription } from 'rxjs/internal/Subscription';
import { Servicesdem } from 'src/app/models/servicesdem';
import { Servicesoff } from 'src/app/models/servicesoff';
import { CrudService } from 'src/app/services/crud.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-service-offert',
  templateUrl: './service-offert.component.html',
  styleUrls: ['./service-offert.component.css'],
})
export class ServiceOffertComponent implements OnInit {
  constructor(
    private crud: CrudService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}
  orderHead: any;
  isDescOrder: any;
  listService: Servicesoff[] = [];
  searshInput = { titre: '' };

  goDetails(id: string) {
    this.router.navigate(['detailsServiceOff/', id]);
  }

  listServiceDem: Servicesdem[] = [];
  user: User[] = [];
  getServiceDem!: Subscription;
  getServiceOffert!: Subscription;
  hideOff: boolean = false;
  hideDem: boolean = true;
  listServiceOffert: Servicesoff[] = [];

  imageURL: string = this.tokenStorage.getUser().image;
  name: string = this.tokenStorage.getUser().nom;
  lastname: string = this.tokenStorage.getUser().prenom;
  profession: string = this.tokenStorage.getUser().profession;

  sort(head: any) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHead = head;
  }
  ngOnInit(): void {
    this.crud.getAllServicesOff().subscribe((data) => {
      this.listService = data;
    });
  }
}
