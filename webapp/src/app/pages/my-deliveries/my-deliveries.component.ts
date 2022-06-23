import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/classes/Delivery';
import { Page } from 'src/app/classes/Page';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-my-deliveries',
  templateUrl: './my-deliveries.component.html',
  styleUrls: ['./my-deliveries.component.css']
})
export class MyDeliveriesComponent implements OnInit {

  deliveries!: Page<Delivery>;
  all_deliveries!: Delivery[];

  constructor(private service: DeliveryService) { }

  ngOnInit(): void {
    this.getMyDeliveries();
  }

  getMyDeliveries() {
    this.service.getMyDeliveries().subscribe((info) => {
      this.deliveries = info
      this.all_deliveries = this.deliveries.content
    });
  }
  
  collect(deliveryId: number) {
    this.service.collectDelivery(deliveryId).subscribe((info) => {
      location.reload();
    });
  }

  deliver(deliveryId: number) {
    this.service.deliverDelivery(deliveryId).subscribe((info) => {
      location.reload();
    });
  }

}
