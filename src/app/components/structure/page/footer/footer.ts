import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  public data = signal(new Date()); 
  @Input() open = false;

  @Output() toggleDelete = new EventEmitter<void>();

  onClick() {
    this.toggleDelete.emit();
  }
}
