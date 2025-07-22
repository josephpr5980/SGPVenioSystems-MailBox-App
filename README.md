# SgpmailboxApp

This project is an Angular 14 mailbox UI designed for intuitive and efficient email management.

## Features
- Clear navigation links (Inbox, Sent, Drafts, Spam) with icons
- Card-based email representation (avatar, sender, date, snippet)
- Responsive design using SASS (.scss) with mixins and variables
- Reusable Angular library for EmailCard component
- First email auto-opens for immediate viewing
- Scrollable stack of email cards
- No third-party CSS frameworks
- UI closely follows the provided Adobe XD mockup

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Library Usage
The reusable library `emailcard-lib` is located in `projects/emailcard-lib`. Import its EmailCard component into your app modules as needed.

## Assets
Download SVG/PNG icons from the provided Adobe XD mockup and place them in `src/assets`.

## Styling
All styles use SASS (.scss). Mixins and variables are defined in component and global styles.

