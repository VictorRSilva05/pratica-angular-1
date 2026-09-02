import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  standalone: false,
  templateUrl: './status-card.html',
  styleUrl: './status-card.scss',
})
export class StatusCard {

  @Input() studentName: string = '';
  @Input() available: boolean = false;
}
