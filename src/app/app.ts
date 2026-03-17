import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homes } from './homes/homes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'assignment-3-homes-app';
}
