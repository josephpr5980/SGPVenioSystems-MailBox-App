# SgpmailboxApp

This project is an Angular 14 mailbox UI

## Features
- Clear navigation links (Inbox, Sent, Drafts, Trash, Flagged, More) with icons
- Card-based email representation (avatar, sender, date, snippet)
- Responsive design using SASS (.scss) with mixins and variables
- Reusable Angular library for EmailCard component
- First email auto-opens for immediate viewing
- Scrollable stack of email cards
- No third-party CSS frameworks
- UI closely follows the provided professional mockup

## How to Run This Project
1. **Clone the repository:**
   ```
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. **Install dependencies:**
   ```
   npm install
   ```
3. **Start the development server:**
   ```
   ng serve
   ```
   The app will be available at `http://localhost:4200/`.

## Library Usage
The reusable library `emailcard-lib` is located in `projects/emailcard-lib`. Import its EmailCard component into your app modules as needed.

## Assets
SVG/PNG icons are located in `src/assets`.

## Styling
All styles use SASS (.scss). Mixins and variables are defined in component and global styles.


