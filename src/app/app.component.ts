import { Component, HostListener } from '@angular/core';
import { $ } from 'protractor';
import * as jquery from 'jquery'  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pranita Laddha - Front End Developer';
  isClicked = 1;
  links = [
    'home',
    'about',
    'resume',
    'portfolio',
    'services',
    'contact'
  ];

  constructor(){
    console.log()
  }

  increaseCount() {
    this.isClicked += 1;
    console.log('click: ' , this.isClicked)
  }

  @HostListener('click') onClick(e: any) {
    console.log(e)
    // jquery('.navbar-collapse.collapse').removeClass('show');
    // jquery('.menu-toggle.isClicked').removeClass('isClicked')
  } 
}
