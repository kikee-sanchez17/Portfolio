import { Component } from '@angular/core';
import { DarkmodebuttonComponent } from '../darkmodebutton/darkmodebutton.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [DarkmodebuttonComponent,RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  
}
