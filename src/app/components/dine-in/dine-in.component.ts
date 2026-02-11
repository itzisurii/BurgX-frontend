import { Component, OnInit } from '@angular/core';
import { Table } from '../../../model/menuItems';

@Component({
  selector: 'app-dine-in',
  imports: [],
  templateUrl: './dine-in.component.html',
  styleUrl: './dine-in.component.css'
})
export class DineInComponent implements OnInit {

  table: Table[] = [];

  ngOnInit(): void {
    console.log("Componets is loading");
    this.generateTables();
    
  }
  generateTables() {
    for (let i = 1; i < 24; i++) {
      this.table.push({
        id: i, 
        status: i == 2 || i == 5 ? 'occupied': i == 3 ? 'cleaning' : 'available',
        seat:[4,4,2,6,4][i-1] || 4,
        amount: i == 2 ? 42.50 : i == 5 ? 12.95 : 0,
        time: i == 2 ? '28 mins' : i == 5 ? '12 mins' : ''
      });
    }
  }

  getIcon(status : string): string{
    if(status === 'occupied'){
      return 'restaurant';
    }
    if (status === 'cleaning') {
      return 'cleaning_services'
    }
    else{
      return 'person_outline';
    }

  }

}
