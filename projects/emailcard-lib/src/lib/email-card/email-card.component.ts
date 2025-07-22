import { Component, Input } from '@angular/core';

@Component({
  selector: 'mail-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./email-card.component.scss']
})
export class EmailCardComponent {
  @Input() avatarUrl: string = '';
  @Input() senderName: string = '';
  @Input() date: string = '';
  @Input() snippet: string = '';
}
