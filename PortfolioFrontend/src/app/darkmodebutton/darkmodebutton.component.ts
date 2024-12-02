import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-darkmodebutton',
  standalone: true,
  imports: [],
  templateUrl: './darkmodebutton.component.html',
  styleUrls: ['./darkmodebutton.component.css']
})
export class DarkmodebuttonComponent implements AfterViewInit {

  // Referencia al checkbox
  darkModeToggle!: HTMLInputElement;
  constructor() { }

  // Método para cambiar el tema
  toggleTheme(isDarkMode: boolean): void {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Al cargar el componente, inicializa el tema
  ngAfterViewInit(): void {
    this.darkModeToggle = document.getElementById('darkmode-toggle') as HTMLInputElement;
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default: 'light'
    const isDarkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.darkModeToggle.checked = isDarkMode; // Ajusta el estado del toggle

    // Añadir el evento de cambio
    this.darkModeToggle.addEventListener('change', (event) => {
      this.toggleTheme((event.target as HTMLInputElement).checked);
    });
  }

}
