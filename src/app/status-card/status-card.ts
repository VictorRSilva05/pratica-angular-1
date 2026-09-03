import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status-card',
  standalone: false,
  templateUrl: './status-card.html',
  styleUrl: './status-card.scss',
})
export class StatusCard {

  @Input() studentName: string = '';
  @Input() available: boolean = false;

  @Output() availabilityChanged = new EventEmitter<boolean>();

  public changeAvailability(): void {
    const newAvailability = !this.available;
    this.availabilityChanged.emit(newAvailability);
  }
}
