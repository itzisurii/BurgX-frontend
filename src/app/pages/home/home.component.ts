import { Component } from '@angular/core';
import { OrderCartComponent } from "../../components/order-cart/order-cart.component";
import { BurgerGridComponent } from "../../components/burger-grid/burger-grid.component";
import { BeveragesComponent } from "../../components/beverages/beverages.component";
import { OrderSummaryComponent } from "../../components/order-summary/order-summary.component";
import { OrderTypeComponent } from "../../components/order-type/order-type.component";
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { AllOrdersComponent } from "../../components/all-orders/all-orders.component";
import { CommonModule } from '@angular/common';
import { DineInComponent } from "../../components/dine-in/dine-in.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, OrderCartComponent, NavBarComponent, BurgerGridComponent, BeveragesComponent, OrderSummaryComponent, OrderTypeComponent, AllOrdersComponent, DineInComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeView: string = 'dashboard';

  handlePanelChange(viewName: string) {
    console.log('Switching to:', viewName);
    this.activeView = viewName;
  }
}
