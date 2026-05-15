import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistracijaForma } from './registracija-forma/registracija-forma';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistracijaForma],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nvt-angular-vezbe');
}
