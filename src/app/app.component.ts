import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BurgerGridComponent } from "./components/burger-grid/burger-grid.component";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";
import { BeveragesComponent } from "./components/beverages/beverages.component";
import { OrderCartComponent } from "./components/order-cart/order-cart.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, NavBarComponent, BurgerGridComponent, OrderSummaryComponent, BeveragesComponent, OrderCartComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BurgX';
}
