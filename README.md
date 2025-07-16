# VonVibingMachine: The Book

This repository contains the source code for the VonVibingMachine book website, built with [Docusaurus](https://docusaurus.io/).

## 🌐 Live Site

Visit the live site at: [www.vonvibingmachine.com](https://www.vonvibingmachine.com)

## 📖 About

This project is a work of creative fiction, in the spirit of Douglas Hofstadter, John Conway, John Von Neumann, Marvin Minsky, and Andrej Karpathy. The book consists of 30 dialogues exploring the development of the VonVibingMachine - a multi-agent machine architecture for LLMs to self-manage.

## 🚀 Local Development

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build for Production

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve Built Site Locally

```bash
npm run serve
```

This command serves the built website locally for testing.

## 📁 Project Structure

```
├── docs/                    # Documentation files (Markdown)
│   ├── intro.md            # Introduction page
│   ├── dialogue-001.md     # First dialogue
│   ├── dialogue-002.md     # Second dialogue
│   ├── ...                 # More dialogues
│   └── dialogue-030.md     # Final dialogue
├── src/
│   ├── css/
│   │   └── custom.css      # Custom CSS
│   └── pages/
│       └── index.js        # Homepage redirect
├── static/                 # Static assets
├── docusaurus.config.js    # Docusaurus configuration
├── sidebars.js            # Sidebar navigation
└── package.json
```

## 🎨 Features

- **Dark Mode**: The site defaults to dark mode with a toggle option
- **Responsive Design**: Mobile-friendly layout
- **Navigation**: Organized sidebar with all 30 dialogues
- **Search**: Built-in search functionality
- **GitHub Integration**: Links to the repository

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is triggered on every push to the main branch.

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then deploy the `build` directory to your hosting service
```

## 🛠️ Configuration

The main configuration is in `docusaurus.config.js`. Key settings include:

- **Title**: VonVibingMachine: The Book
- **URL**: https://www.vonvibingmachine.com
- **Dark Mode**: Enabled by default
- **Docs Route**: Served at the root path (`/`)

## 📝 Content Management

All dialogue content is stored in Markdown files in the `docs/` directory. The sidebar navigation is automatically generated from the configuration in `sidebars.js`.

## 🤝 Contributing

This is a creative fiction project. For any issues or suggestions, please open an issue in the [GitHub repository](https://github.com/pdg744/VonVibingMachine-TheBook).

## 📄 License

This project is part of the VonVibingMachine creative fiction work. 