import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  folders = [
    { name: 'Inbox', icon: 'assets/inbox.svg' },
    { name: 'Flagged', icon: 'assets/flagged.svg' },
    { name: 'Drafts', icon: 'assets/drafts.svg' },
    { name: 'Sent', icon: 'assets/sent.svg' },
    { name: 'Trash', icon: 'assets/trash.svg' },
    { name: 'More', icon: 'assets/more.svg' }
  ];
  selected = 'Inbox';

  select(folder: string) {
    this.selected = folder;
  }
}
