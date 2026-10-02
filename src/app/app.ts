import { Component, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);

  public registerLogs(){
    console.log(this.name.value);
    console.log(this.email.value);
  }
}
