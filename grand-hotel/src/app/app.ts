import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Header } from "./header/header";
import { AboutUs } from "./about-us/about-us";
import { Rooms } from "./rooms/rooms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, AboutUs, Rooms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'grand-hotel';
}
