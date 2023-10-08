import { Component, OnInit } from '@angular/core';
import { IClient } from './clients';

@Component({
  selector: 'app-jenzco-hotel',
  templateUrl: './jenzco-hotel.component.html',
  styleUrls: ['./jenzco-hotel.component.css'],
})
export class JenzcoHotelComponent implements OnInit {
  hotelTitle: string = 'Jenzco Hotels and Suites';
  textColor: string = 'blue';

  clients: IClient[] = [
    {
      clientId: 1,
      clientName: 'Luciano',
      clientRoomCode: '11191',
      ArrivalDate: 'Aug 19, 2021',
      price: 56092.88,
      starRating: 3.2,
    },
    {
      clientId: 2,
      clientName: 'Jummy',
      clientRoomCode: '89023',
      ArrivalDate: 'July 18, 2021',
      price: 56309.88,
      starRating: 4.2,
    },
    {
      clientId: 3,
      clientName: 'Chisom',
      clientRoomCode: '11048',
      ArrivalDate: 'April 02, 2021',
      price: 15609.88,
      starRating: 4.8,
    },
    {
      clientId: 4,
      clientName: 'Benedict',
      clientRoomCode: '40022',
      ArrivalDate: 'April 10, 2022',
      price: 11000.55,
      starRating: 3.7,
    },
    {
      clientId: 5,
      clientName: 'Khaid',
      clientRoomCode: '65042',
      ArrivalDate: 'October 15, 2020',
      price: 30985.95,
      starRating: 4.6,
    },
  ];

  showClientName(clientName: string): void {
    alert('This is ' + clientName);
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.clients);
  }
}
