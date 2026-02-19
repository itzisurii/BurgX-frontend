import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-type',
  imports: [],
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.css']
})
export class OrderTypeComponent {

  currentPanel: string = 'dashboard';

  @Output() panelChange = new EventEmitter<string>(); 

  setPanel(panel: string) {
    this.currentPanel = panel;
    this.panelChange.emit(panel);
  }
}
