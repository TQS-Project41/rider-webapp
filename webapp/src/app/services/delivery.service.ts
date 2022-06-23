import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Page } from '../classes/Page';
import { Delivery } from '../classes/Delivery';


@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) {}

  getAllDeliveries() {
    return this.http.post<Page<Delivery>>(environment.PUBLIC_API + "couriers/listen", "");
  }

  getMyDeliveries() {
    return this.http.get<Page<Delivery>>(environment.PUBLIC_API + "delivery");
  }

  acceptDelivery(id: number) {
    return this.http.put(environment.PUBLIC_API + "delivery/" + id + "/accept", "");
  }

  collectDelivery(id: number) {
    return this.http.put(environment.PUBLIC_API + "delivery/" + id + "/collect", "");
  }

  deliverDelivery(id: number) {
    return this.http.put(environment.PUBLIC_API + "delivery/" + id + "/deliver", "");
  }

}