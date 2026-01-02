# TypeScript Website Tutorial

A simple TypeScript website with shared components, demonstrating TypeScript basics without Node.js.

## Project Structure

```
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Shared styles
├── tsconfig.json       # TypeScript configuration
├── src/
│   ├── main.ts         # Home page logic
│   ├── about.ts        # About page logic
│   ├── contact.ts      # Contact page logic
│   └── components/
│       ├── nav.ts      # Navigation component
│       └── footer.ts   # Footer component
└── dist/               # Compiled JavaScript files (generated)
```

## How to Use

### 1. Compile TypeScript Files

You need the TypeScript compiler installed. If you don't have it:

```bash
# Install TypeScript globally (one-time setup)
npm install -g typescript
```

Then compile your TypeScript files:

```bash
# Compile all TypeScript files
tsc

# Or watch for changes and auto-compile
tsc --watch
```

This will create JavaScript files in the `dist/` folder.

### 2. Open the Website

Simply open any HTML file in your browser:
- Open `index.html` for the home page
- Open `about.html` for the about page
- Open `contact.html` for the contact page

You can also use a simple local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## What You'll Learn

- **TypeScript Classes**: How to create and use classes in TypeScript
- **Components**: Building reusable UI components
- **Type Safety**: Using TypeScript's type system for better code
- **DOM Manipulation**: Working with the DOM using TypeScript
- **Modules**: Organizing code with ES6 modules
- **Interfaces**: Defining data structures with interfaces

## Key TypeScript Concepts Demonstrated

1. **Classes and Constructors**: See `Navigation` and `Footer` classes
2. **Access Modifiers**: `private` and `public` methods
3. **Type Annotations**: Function parameters and return types
4. **Interfaces**: `FormData` interface in contact.ts
5. **DOM Types**: `HTMLElement`, `HTMLFormElement`, etc.

## Modifying the Website

- **Add new pages**: Create new HTML and TypeScript files
- **Update navigation**: Edit the `pages` array in `nav.ts`
- **Change styles**: Modify `styles.css`
- **Add features**: Extend the TypeScript classes with new methods

Enjoy learning TypeScript!
