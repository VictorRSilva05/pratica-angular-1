import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.html',
  styleUrl: './notification.scss',
})
export class Notification {

  @Input() username: string = '';

  @Output() notificationSent = new EventEmitter<void>();

  public sendNotification(){
    this.notificationSent.emit();
  }
}
