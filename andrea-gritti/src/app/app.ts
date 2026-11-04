import { Component, signal } from '@angular/core';
import { SecondComponent } from './second-component/second-component';
import { ThirdComponent } from './third-component/third-component';

@Component({
  imports: [SecondComponent, ThirdComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = 'app';
  protected readonly title = signal('andrea-gritti');
}