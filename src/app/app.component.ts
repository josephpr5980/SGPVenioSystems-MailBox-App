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
  showHelpMenu = false;

  onGetHelp() {
    // Implement help logic here
   
  }

  onShareFeedback() {
    // Implement feedback logic here
    
  }

  onLegalNotices() {
    // Implement legal notices logic here
    
  }
  toggleFullscreen() {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen();
      } else if ((elem as any).mozRequestFullScreen) {
        (elem as any).mozRequestFullScreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  }
  // ...existing code...
  onZoomChange(event: any) {
    const zoom = Number(event.target.value) / 100;
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
      mainContent.style.transform = `scale(${zoom})`;
      mainContent.style.transformOrigin = 'top left';
    }
  }
  messageText: string = '';
  searchTerm: string = '';
  title = 'sgpmailbox-app';

  folderList: Folder[] = ['Inbox', 'Flagged', 'Sent', 'Drafts', 'Trash', 'More'];

  folders: Record<Folder, Email[]> = {
    Inbox: [
      {
        avatarUrl: 'assets/image1.png',
        senderName: 'Jane Doe',
        date: 'Today 8:30 AM',
        snippet: 'Welcome Jane Doe! This is a sample email card.',
        content: 'Welcome to the team! We’re thrilled to have you on board. This email card is a small welcome note to help you feel at home. Looking forward to working together and achieving great things!',
        senderEmail: 'janedoe@example.com'
      },
      {
        avatarUrl: 'assets/image2.png',
        senderName: 'John Smith',
        date: 'Yesterday 9:30 AM',
        snippet: 'Welcome John Smith! This is a sample email card.',
        content: 'Welcome to the team! We’re thrilled to have you on board. This email card is a small welcome note to help you feel at home. Looking forward to working together and achieving great things!',
        senderEmail: 'johnsmith@example.com'
      },
      {
        avatarUrl: 'assets/image3.png',
        senderName: 'Lilly',
        date: 'Today 10:15 AM',
        snippet: 'Welcome Lilly! This is a sample email card.',
        content: 'Welcome to the team! We’re thrilled to have you on board. This email card is a small welcome note to help you feel at home. Looking forward to working together and achieving great things!',
        senderEmail: 'lilly@example.com'
      },
      {
        avatarUrl: 'assets/image4.png',
        senderName: 'Smith',
        date: 'Today 11:00 AM',
        snippet: 'Welcome Smith! This is a sample email card.',
        content: 'Welcome to the team! We’re thrilled to have you on board. This email card is a small welcome note to help you feel at home. Looking forward to working together and achieving great things!',
        senderEmail: 'smith@example.com'
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

  onAttach() {
    alert('Attach functionality coming soon!');
  }

  onSendMessage() {
    if (this.messageText.trim()) {
      alert('Message sent: ' + this.messageText);
      this.messageText = '';
    }
  }

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