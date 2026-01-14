# BIP39 Word Generator

A modern web application for generating secure BIP39 mnemonic phrases, built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Generate BIP39 mnemonic phrases with 12, 15, 18, 21, or 24 words
- Display words in multiple formats:
  - **Username format**: First two words separated by a dot (e.g., "word.word")
  - **Password format**: First three words separated by dashes (e.g., "word-word-word")
  - **Full mnemonic**: All words in a textarea for easy copying
- Copy functionality for all formats
- Responsive design with Tailwind CSS
- Static build for easy deployment

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Run development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

```bash
# Build for production
npm run build
```

The static files will be generated in the `dist/` directory, ready for deployment to any static hosting service.

## Deployment

Since this is a static application, you can deploy it to various hosting platforms:

- **GitHub Pages**: Upload the `dist` folder
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **Vercel**: Import your repository or upload the `dist` folder
- **Any static hosting**: Just serve the `dist` folder

## Security Warning

⚠️ **Important**: The generated mnemonic phrases should be stored securely offline. Never share them with anyone. Anyone with access to these words can access your cryptocurrency wallet.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- BIP39 library

## License

MIT
