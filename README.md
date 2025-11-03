# Portfolio - Bathala Anjith Kumar

A modern, dynamic portfolio website with Telegram Bot integration support.

## 🎯 Features

- ✨ Particles.js background animations
- ⌨️ Typewriter effect with dynamic text
- 🎨 Dark neon/cyberpunk theme
- 📱 Fully responsive design
- 🤖 **Telegram Bot Ready** - All data managed via JSON
- 🚀 Fast loading with preloader
- 📊 GitHub stats integration

## 🗂️ Structure

```
portfolio/
├── index.html          # Home page
├── about.html          # About page
├── skills.html         # Skills showcase
├── projects.html       # Projects portfolio
├── resume.html         # Resume/CV
├── contact.html        # Contact form
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   ├── main.js        # Main JavaScript
│   └── data-loader.js # Dynamic data loader
├── data/
│   └── portfolio-data.json  # 🤖 ALL PORTFOLIO DATA HERE
└── PIC.jpg            # Profile picture
```

## 🤖 Telegram Bot Integration

### How It Works

All portfolio content is stored in `data/portfolio-data.json`. Your Telegram bot can:

1. **Read** current portfolio data
2. **Update** any information (skills, projects, contact, etc.)
3. **Auto-deploy** changes via GitHub Actions

### Data Structure

```json
{
  "personal": { ... },      // Name, email, phone, bio
  "education": { ... },     // College, degree details
  "social": { ... },        // GitHub, LinkedIn links
  "typewriterTexts": [],    // Homepage rotating text
  "skills": {
    "technical": [],        // Technical skills with levels
    "soft": []             // Soft skills
  },
  "projects": [],          // Your projects
  "experience": [],        // Work experience
  "certifications": []     // Certifications
}
```

### Bot Commands Example

```
/update_skill Python 85
/add_project "Project Name" "Description" "Tech Stack"
/update_email new@email.com
/update_phone +91 1234567890
/add_typewriter_text "Full Stack Developer"
```

## 🚀 Quick Start

### Local Development

1. Clone the repository
2. Open `index.html` in a browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

### Edit Portfolio Data

**Option 1: Manual** (Before Bot)
- Edit `data/portfolio-data.json` directly
- Changes reflect automatically on page reload

**Option 2: Via Telegram Bot** (Future)
- Send commands to your bot
- Bot updates the JSON file
- GitHub Actions auto-deploys

## 📝 Updating Content

### Update Personal Info
Edit `data/portfolio-data.json`:
```json
{
  "personal": {
    "email": "your-new-email@gmail.com",
    "phone": "+91 1234567890"
  }
}
```

### Add Skills
```json
{
  "skills": {
    "technical": [
      {
        "name": "React",
        "level": 85,
        "icon": "fab fa-react"
      }
    ]
  }
}
```

### Add Projects
```json
{
  "projects": [
    {
      "name": "Project Name",
      "description": "Description",
      "image": "project-image.jpg",
      "technologies": ["HTML", "CSS", "JS"],
      "github": "github-repo-url",
      "demo": "live-demo-url"
    }
  ]
}
```

## 🛠️ Technologies

- HTML5
- CSS3 (Custom Properties, Animations)
- Vanilla JavaScript (ES6+)
- Particles.js
- Font Awesome Icons

## 📦 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch: `main`, folder: `/` (root)
4. Done! ✅

### Netlify
1. Drag and drop the folder
2. Or connect to GitHub for auto-deploy

### Any Static Host
- Works on any server that can serve HTML files
- No build process needed!

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs
- Suggest features
- Fork and customize for yourself

## 📄 License

© 2025 Bathala Anjith Kumar. All Rights Reserved.

---

**Made with ❤️ and lots of ☕**
