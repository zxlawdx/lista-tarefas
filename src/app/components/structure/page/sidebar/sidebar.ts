import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isOpen = signal(false);

  @Input()
  set open(value: boolean) {
    this.isOpen.set(value);
  }

  toggleTheme(isDark: boolean) {
    document.body.classList.toggle('dark', isDark);
  }

}
