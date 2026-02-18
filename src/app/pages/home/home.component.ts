import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { OrderTypeComponent } from '../../components/order-type/order-type.component';
import { BurgerGridComponent } from '../../components/burger-grid/burger-grid.component';
import { BeveragesComponent } from '../../components/beverages/beverages.component';
import { OrderCartComponent } from '../../components/order-cart/order-cart.component';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';
import { AllOrdersComponent } from '../../components/all-orders/all-orders.component';
import { DineInComponent } from '../../components/dine-in/dine-in.component';
import { TakeawayComponent } from '../../components/takeaway/takeaway.component';
import { TakeawaysidebarComponent } from '../../components/takeawaysidebar/takeawaysidebar.component';
import { DeliveryComponent } from '../../components/delivery/delivery.component';
import { DessertsComponent } from "../../components/desserts/desserts.component";
import { SpecialsComponent } from "../../components/specials/specials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    OrderTypeComponent,
    BurgerGridComponent,
    BeveragesComponent,
    OrderCartComponent,
    OrderSummaryComponent,
    AllOrdersComponent,
    DineInComponent,
    TakeawayComponent,
    TakeawaysidebarComponent,
    DeliveryComponent,
    DessertsComponent,
    SpecialsComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  activeView = 'dashboard';

  @ViewChild('contentScroller') contentScroller!: ElementRef;

  handlePanelChange(view: string) {
    this.activeView = view;
  }

  scrollToSection(id: string) {
    const container = this.contentScroller.nativeElement;
    const target = document.getElementById(id);

    if (!target) return;

    const offset =
      target.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop;

    container.scrollTo({
      top: offset - 16,
      behavior: 'smooth'
    });
  }
}
