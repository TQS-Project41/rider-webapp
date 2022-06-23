import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Business } from '../classes/Business';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) {}

  getBusinesses() {
    return this.http.get<Business[]>(environment.PUBLIC_API + "business");
  }

  getActiveBusinesses() {
    return this.http.get<Business[]>(environment.PUBLIC_API + "business/active");
  }

  applyBusiness(id: number) {
    return this.http.post(environment.PUBLIC_API + "business/" + id + "/apply", "");
  }

  refuseBusiness(id: number) {
    return this.http.post(environment.PUBLIC_API + "business/" + id + "/refuse", "");
  }

}