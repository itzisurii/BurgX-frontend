import { Component } from '@angular/core';
import { OrderCartComponent } from "../../components/order-cart/order-cart.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { BurgerGridComponent } from "../../components/burger-grid/burger-grid.component";
import { BeveragesComponent } from "../../components/beverages/beverages.component";
import { OrderSummaryComponent } from "../../components/order-summary/order-summary.component";
import { OrderTypeComponent } from "../../components/order-type/order-type.component";

@Component({
  selector: 'app-home',
  imports: [OrderCartComponent, TopBarComponent, NavBarComponent, BurgerGridComponent, BeveragesComponent, OrderSummaryComponent, OrderTypeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
