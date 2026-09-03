import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pratica-angular');

  public name: string = 'Victor';
  public available: boolean = false;
  public fontSize: number = 16;

  public toggleAvailability(): void{
    this.available = !this.available;
  }

  public changeAvailability(availability : boolean): void{
    this.available = availability;
  }
}
