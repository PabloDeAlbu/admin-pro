import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  public themeURL = document.getElementById('theme');
  
  constructor() { }

  ngOnInit() {
  
    const url = localStorage.getItem('theme') || 'assets/css/colors/purple.css'
    this.themeURL.setAttribute('href', url);
  
  }

}
