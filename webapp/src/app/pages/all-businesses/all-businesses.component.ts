import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/classes/Business';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-all-businesses',
  templateUrl: './all-businesses.component.html',
  styleUrls: ['./all-businesses.component.css']
})
export class AllBusinessesComponent implements OnInit {

  all_businesses!: Business[];

  constructor(private service: BusinessService) { }

  ngOnInit(): void {
    this.getBusinesses();
  }

  getBusinesses() {
    this.service.getBusinesses().subscribe((info) => {
      this.all_businesses = info;
    });
  }

  apply(businessId: number) {
    this.service.applyBusiness(businessId).subscribe((info) => {
      location.reload();
    });
  }

  refuse(businessId: number) {
    this.service.refuseBusiness(businessId).subscribe((info) => {
      location.reload();
    });
  }
}
