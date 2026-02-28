# Cosmic Tasks

A premium-quality, futuristic React Todo List application built with Vite. Features a stunning glassmorphism UI, smooth micro-interactions, responsive design, and local storage persistence.

## 🚀 Live Demo
[View Live Demo Here](https://adityahans.github.io/todo-app/)

## ✨ Features
- **Ultra-modern UI:** Glassmorphism card layout with subtle gradients, soft shadows, and blur effects.
- **Smooth Animations:** Hover animations, list entry/exit transitions, and custom checkbox animations.
- **Core Functionality:** Add, edit inline, mark as completed, and delete tasks.
- **Filtering:** Show All, Active, or Completed tasks.
- **Data Persistence:** Automatically saves your tasks to localStorage.
- **Responsive Design:** Mobile-first approach for an optimal experience on any device.
- **Keyboard Support:** Press `Enter` to add or save edits, `Escape` to cancel editing.

## 🛠️ Tech Stack
- **Framework:** React 19 (via Vite)
- **Language:** JavaScript
- **Styling:** Vanilla CSS (Custom properties, Flexbox, Animations)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Persistence:** LocalStorage API
- **Deployment:** GitHub Pages (`gh-pages`)

## 💻 Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adityahans/todo-app.git
   cd todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173/`

## 🌐 GitHub Pages Deployment Steps

This project is configured for easy deployment to GitHub Pages.

1. Ensure the `homepage` property in `package.json` is set correctly:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>"
   ```
2. Make sure the `base` property in `vite.config.js` matches your repository name:
   ```javascript
   export default defineConfig({
     base: '/<repo-name>/',
     plugins: [react()],
   })
   ```
3. Run the deploy script:
   ```bash
   npm run deploy
   ```
   *(This will automatically build the project and push the `dist` folder to the `gh-pages` branch).*

## 📄 License
This project is open-source and available under the MIT License.
