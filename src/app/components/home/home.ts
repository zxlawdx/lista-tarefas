import { Component } from '@angular/core';
import { Header } from "../structure/header/header";
import { CommonModule } from '@angular/common';
import { Page } from '../structure/page/page';
import { Sidebar } from '../structure/page/sidebar/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Sidebar, Page, CommonModule],
  templateUrl: './home.html',
})
export class Home {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log(this.sidebarOpen);
  }
}

