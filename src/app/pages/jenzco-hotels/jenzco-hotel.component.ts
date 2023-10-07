import { Component, OnInit } from '@angular/core';
import { IClient } from './clients';

@Component({
  selector: 'app-jenzco-hotel',
  templateUrl: './jenzco-hotel.component.html',
  styleUrls: ['./jenzco-hotel.component.css'],
})
export class JenzcoHotelComponent implements OnInit {
  hotelTitle: string = 'Jenzco Hotels and Suites';
  clients: IClient[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.clients);
  }
}
