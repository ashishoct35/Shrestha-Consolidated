# Shrestha Consolidated

Premium website builder company portfolio website built with React, Vite, and Vanilla CSS.

![Shrestha Consolidated](src/assets/logo.png)

## 🌟 Features

- **Premium Design**: Gold and black color scheme with smooth animations
- **Fully Responsive**: Mobile-first design with hamburger menu
- **Content Management**: Single `content.json` file for easy content updates
- **Calendly Integration**: Book consultation buttons throughout the site
- **Live Portfolio**: Embedded iframe previews of past projects
- **Modern Stack**: React, Vite, Framer Motion, CSS Modules

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ashishoct35/Shrestha-Consolidated.git

# Navigate to project directory
cd Shrestha-Consolidated

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the website.

## 📝 Editing Content

All website content is managed through `src/content.json`:

- **Company Info**: Name, logo, description, tagline
- **Hero Section**: Title, subtitle, CTA text
- **Services**: Add/edit/remove services
- **Portfolio**: Add/edit/remove portfolio projects
- **Contact Info**: Social links, phone, address, map, Calendly link

### Example: Adding a New Service

Edit `src/content.json`:

```json
{
  "services": [
    {
      "id": 5,
      "title": "Your New Service",
      "description": "Description of your service",
      "icon": "Code"
    }
  ]
}
```

Available icons: `Code`, `ShoppingBag`, `Palette`, `Search`

## 📁 Project Structure

```
shrestha-consolidated/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── content.json     # ⭐ Edit this file to update content
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── package.json
└── vite.config.js
```

## 🎨 Pages

- **Home** (`/`): Hero section, featured services, portfolio preview
- **Services** (`/services`): Full services list
- **Portfolio** (`/portfolio`): Live website previews
- **Contact** (`/contact`): Social links, map, contact info

## 🔧 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ashishoct35/Shrestha-Consolidated)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ashishoct35/Shrestha-Consolidated)

## 📧 Contact

- **Website**: [Shrestha Consolidated](#)
- **Email**: shresthaconsolidated@example.com
- **Phone**: +977-9800000000
- **Location**: Kathmandu, Nepal

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Shrestha Consolidated
