import { Component } from '@angular/core';
import { DarkmodebuttonComponent } from '../darkmodebutton/darkmodebutton.component';
import { RouterModule } from '@angular/router';
import { MobileDarkmodeToggleComponent } from '../mobile-darkmode-toggle/mobile-darkmode-toggle.component';
@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [MobileDarkmodeToggleComponent, RouterModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.css'
})
export class MobileNavComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
