import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-darkmode-toggle',
  templateUrl: './mobile-darkmode-toggle.component.html',
  standalone: true,
  styleUrls: ['./mobile-darkmode-toggle.component.css']
})
export class MobileDarkmodeToggleComponent implements OnInit {
  isDarkMode = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.isDarkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
