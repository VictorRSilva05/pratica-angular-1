import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  public name: string = '';
  public email: string = '';
  public available: boolean = false;
  public fontSize: number = 16;

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  public toggleAvailability(): void {
    this.available = !this.available;
  }

  public changeAvailability(availability: boolean): void {
    this.available = availability;
  }

  onFormSubmit() {
    this.name = this.userForm.value.name ?? '';
    this.email = this.userForm.value.email ?? '';
  }
}
