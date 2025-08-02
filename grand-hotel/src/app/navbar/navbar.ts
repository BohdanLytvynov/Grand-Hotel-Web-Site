import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
   
  menuItemClicked : boolean = false;

  onMenuItemClick()
  {
    this.menuItemClicked = !this.menuItemClicked;    
  }
}
