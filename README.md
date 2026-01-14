# BIP39 Word Generator

A modern web application for generating memorable passwords, usernames, and email addresses using words from the BIP39 wordlist. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Generate 2-24 random words from the BIP39 wordlist
- Display words in multiple formats:
  - **Username format**: All words separated by dots (e.g., "word.word.word")
  - **Password format**: All words separated by dashes (e.g., "word-word-word")
  - **Full list**: All words in a textarea for easy copying
- Copy functionality for all formats
- Responsive design with Tailwind CSS
- Static build for easy deployment

## Use Cases

- Memorable passwords
- Unique usernames
- Email addresses
- Security questions
- Passphrases

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

## About

This tool generates random words from the BIP39 wordlist for creating memorable passwords, usernames, and email addresses. It's not for use with cryptocurrency wallets - for wallet recovery phrases, use dedicated wallet software.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- BIP39 library

## License

MIT
