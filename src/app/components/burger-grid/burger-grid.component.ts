import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-grid',
  standalone: true,
  templateUrl: './burger-grid.component.html',
  styleUrl: './burger-grid.component.css'
})
export class BurgerGridComponent {

  scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

}