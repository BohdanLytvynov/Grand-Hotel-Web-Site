import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Header } from "./header/header";
import { AboutUs } from "./about-us/about-us";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, AboutUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'grand-hotel';
}
