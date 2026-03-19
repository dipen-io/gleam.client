# GleamUpp - Professional Cleaning Services

GleamUpp is a modern, responsive static website for a professional cleaning startup based in Guwahati. Built with a focus on clean UI, high performance, and a genuine customer experience.

## 🚀 Tech Stack

* **Frontend:** HTML5, CSS3 (Modern Flexbox/Grid)
* **Icons:** FontAwesome 6.0
* **Fonts:** Poppins (via Google Fonts)
* **Deployment:** GitHub Pages (via `gh-pages` automated branch strategy)

## 🛠️ Key Features

* **Custom Dropdown Navigation:** Clean, accessible service categories.
* **Coming Soon Gallery:** Animated teaser for "Before & After" project shots.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
* **Service-Focused UI:** Strategic Call-to-Actions (CTAs) to drive bookings.

## 📦 Project Structure

```text
├── css/
│   └── styles.css      # Custom modern styling
├── js/
│   └── script.js      # Mobile menu and UI interactions
├── services/          # Detailed service sub-pages
├── images/            # Optimized assets
├── index.html         # Homepage
└── gallery.html       # Visual portfolio (Coming Soon)

## 📦 Project Structure
This project uses a two-branch strategy:

    * main: Contains the source code and development history.

    * production: Contains the live build deployed to GitHub Pages.

Prerequisites

Ensure you have Node.js installed to use the deployment automation.
npm install
Deploy to Production

Whenever you have pushed your latest changes to main and are ready to update the live site, run:
npm run deploy
📄 License

Internal project for GleamUpp Startup. All rights reserved.

Developed with ❤️ in Guwahati.
```

## 🚀 Deployment Strategy

This project uses a dual-branch workflow to maintain a clean development history:

 * main: Contains the source code and development history.
 * production: Contains the live build deployed to GitHub Pages.

1. Prerequisites

Ensure you have Node.js installed. Initialize the project and install the deployment utility

```bash
npm init -y
npm install gh-pages --save-dev
```

2. Deployment Script

Add the following to your package.json file:

```bash
"scripts": {
  "deploy": "gh-pages -d . -b production"
}
```

3. Push to Live Site

Whenever you have pushed your latest changes to main and are ready to update the live site, run:
```bash
npm run deploy
```

## 📄 License
#### MIT License
Copyright (c) 2026 GleamUpp Startup

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files... [Standard MIT License Clause]

Note: For the full startup protection, ensure this project is marked as "Private" if you do not wish to share the source code publicly.

Developed with ❤️ in Guwahati.
