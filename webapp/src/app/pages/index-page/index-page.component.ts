import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    if (this.checkIfLoggedIn()) {
      window.location.href = "/deliveries";
    }
  }

  /*
  toggleNotification () {
    let notification = document.getElementById('request-notification')!;
    notification.hidden = !notification.hidden

    if (notification.hidden) setTimeout(this.toggleNotification, 5000)
  }
  */

  checkIfLoggedIn() {
    if (localStorage.getItem('token')) return true
    return false
  }

  register() {
    window.location.href = "/register";
  }

}
