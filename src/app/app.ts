import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: `
    <app-home/>
  `
})

export class App {
  protected readonly title = signal('lista-tarefas');
}
