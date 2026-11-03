import { HelloWorld } from './hello-world/hello-world';

@Component({
  imports: [RouterOutlet, HelloWorld],
  // ...
})
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-hello-world');
}
