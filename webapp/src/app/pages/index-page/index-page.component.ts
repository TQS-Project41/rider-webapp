import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNotification () {
    let notification = document.getElementById('request-notification')!;
    notification.hidden = !notification.hidden

    if (notification.hidden) setTimeout(this.toggleNotification, 5000)
  }

}
