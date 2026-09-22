import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  public hasUser: boolean = false;
  public name: string = '';
  public email: string = '';
  public available: boolean = false;
  public fontSize: number = 16;

  constructor(
    private userService: UserService,
  ) { }

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

  public loadUser() {
    this.userService.getUser().subscribe({
      next: (data) => {
        this.name = data.name,
        this.email = data.email,
        this.hasUser = true;
      }
    })
  }

  onFormSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.name = this.userForm.value.name ?? '';
    this.email = this.userForm.value.email ?? '';
  }
}
