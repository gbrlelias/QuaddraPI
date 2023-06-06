import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent {

  menuVisible = false;

  menuShow() {
    this.menuVisible = !this.menuVisible;
  }
}

