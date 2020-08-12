import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeURL = document.getElementById('theme');

  constructor() { 
    const url = localStorage.getItem('theme') || 'assets/css/colors/purple.css'
    this.themeURL.setAttribute('href', url);
  }

  changeTheme(theme) {
    let newThemeURL = `assets/css/colors/${theme}.css`;
    this.themeURL.setAttribute('href', newThemeURL);
    localStorage.setItem('theme', newThemeURL);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const selectors = document.querySelectorAll('.selector');
    selectors.forEach(elem => {

      elem.classList.remove('working');
      let themeSelector = `assets/css/colors/${elem.getAttribute('data-theme')}.css`;

      if (themeSelector === this.themeURL.getAttribute('href')) {
        elem.classList.add('working')
      }
      
    })
  }

}
