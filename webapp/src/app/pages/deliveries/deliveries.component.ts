import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/classes/Delivery';
import { Page } from 'src/app/classes/Page';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {

  deliveries!: Page<Delivery>;
  all_deliveries!: Delivery[];

  constructor(private service: DeliveryService) { }

  ngOnInit(): void {
    this.getAllDeliveries();
  }

  getAllDeliveries() {
    this.service.getAllDeliveries().subscribe((info) => {
      this.deliveries = info
      this.all_deliveries = this.deliveries.content
    });
  }
  
  accept(deliveryId: number) {
    this.service.acceptDelivery(deliveryId).subscribe((info) => {
      location.reload();
    });
  }

}
