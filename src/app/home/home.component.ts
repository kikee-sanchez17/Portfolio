import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

downloadFile() {
  const url = 'assets/CV-EnricSanchezMontoya-2026.pdf';

  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV-EnricSanchezMontoya-2026.pdf'; // nombre que tendrá al guardarse
  a.click();
}
}
