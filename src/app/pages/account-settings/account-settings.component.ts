import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  public themeURL = document.getElementById('theme');
  
  constructor() { }

  ngOnInit() {
  }


  changeTheme(theme){

    let newThemeURL = `assets/css/colors/${ theme }.css`;
    
    this.themeURL.setAttribute('href',newThemeURL);

    localStorage.setItem('theme', newThemeURL);
    
  }
}
