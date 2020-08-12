import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  public themeURL = document.getElementById('theme');
  public selectors: NodeListOf<Element>;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.selectors = document.querySelectorAll('.selector');
    this.settingsService.checkCurrentTheme();
  }


  changeTheme(theme) {
    this.settingsService.changeTheme(theme)
  }

}
