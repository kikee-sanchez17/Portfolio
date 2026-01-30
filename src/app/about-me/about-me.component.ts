import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
downloadFile() {
  const url = 'assets/CV-EnricSanchezMontoya-2026.pdf';

  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV-EnricSanchezMontoya-2026.pdf'; // nombre que tendrá al guardarse
  a.click();
}
}
