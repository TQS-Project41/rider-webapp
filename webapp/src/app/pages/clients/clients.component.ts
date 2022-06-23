import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/classes/Business';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  all_businesses!: Business[];

  constructor(private service: BusinessService) { }

  ngOnInit(): void {
    this.getBusinesses();
  }

  getBusinesses() {
    this.service.getActiveBusinesses().subscribe((info) => {
      this.all_businesses = info;
    });
  }

  refuse(businessId: number) {
    this.service.refuseBusiness(businessId).subscribe((info) => {
      location.reload();
    });
  }

}
