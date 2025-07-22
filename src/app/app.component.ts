import { Component } from '@angular/core';

interface Email {
  avatarUrl: string;
  senderName: string;
  date: string;
  snippet: string;
  content: string;
  senderEmail?: string;
}

export type Folder = 'Inbox' | 'Flagged' | 'Sent' | 'Drafts' | 'Trash' | 'More';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messageText: string = '';

  onAttach() {
    alert('Attach functionality coming soon!');
  }

  onSendMessage() {
    if (this.messageText.trim()) {
      alert('Message sent: ' + this.messageText);
      this.messageText = '';
    }
  }
  searchTerm: string = '';
  title = 'sgpmailbox-app';

  folderList: Folder[] = ['Inbox', 'Flagged', 'Sent', 'Drafts', 'Trash', 'More'];

  folders: Record<Folder, Email[]> = {
    Inbox: [
      {
        avatarUrl: 'assets/image1.png',
        senderName: 'Jane Doe',
        date: 'Today 8:30 AM',
        snippet: 'Welcome to your new mailbox app! This is a sample email card.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum facilisis libero, venenatis mattis orci hendrerit eget. Etiam ultrices mollis justo, nec fermentum elit viverra eu. Cras at cursus turpis. Nullam magna sem, vulputate quis massa nec, mollis sollicitudin dui. Sed eu massa in arcu pharetra posuere. Phasellus maximus neque non ex dapibus fringilla. Praesent nec lacinia enim. Curabitur a dui nisl',
        senderEmail: 'janedoe@example.com'
      },
      {
        avatarUrl: 'assets/image2.png',
        senderName: 'John Smith',
        date: 'Yesterday 9:30 AM',
        snippet: 'Your Angular library is ready. Try adding more features!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum facilisis libero, venenatis mattis orci hendrerit eget. Etiam ultrices mollis justo, nec fermentum elit viverra eu. Cras at cursus turpis. Nullam magna sem, vulputate quis massa nec, mollis sollicitudin dui. Sed eu massa in arcu pharetra posuere. Phasellus maximus neque non ex dapibus fringilla. Praesent nec lacinia enim. Curabitur a dui nisl',
        senderEmail: 'johnsmith@example.com'
      }
    ],
    Flagged: [],
    Sent: [
      {
        avatarUrl: 'assets/avatar3.png',
        senderName: 'Support',
        date: '2025-07-20',
        snippet: 'Your support ticket has been received.',
        content: 'Full email content for Support.'
      }
    ],
    Drafts: [],
    Trash: [],
    More: []
  };

  selectedFolder: Folder = 'Inbox';
  selectedEmail: Email | null = null;

  get emails(): Email[] {
    return this.folders[this.selectedFolder] || [];
  }

  get filteredEmails(): Email[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.emails;
    return this.emails.filter(email =>
      email.senderName.toLowerCase().includes(term) ||
      email.snippet.toLowerCase().includes(term)
    );
  }

  selectFolder(folder: Folder) {
    this.selectedFolder = folder;
    this.selectedEmail = this.filteredEmails[0] || null;
  }

  selectEmail(email: Email) {
    this.selectedEmail = email;
  }

  ngOnInit() {
    this.selectedEmail = this.filteredEmails[0] || null;
  }
}
