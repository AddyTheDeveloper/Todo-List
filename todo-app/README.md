# 🌌 Cosmic Tasks

**Cosmic Tasks** is a premium-quality, futuristic React Todo List application designed to elevate your productivity into the stratosphere. Built with **Vite** and **React 19**, it features a stunning glassmorphism UI, fluid micro-animations, and a robust set of features for modern task management.

---

## 🚀 Live Demo
Experience the cosmic interface here:  
👉 **[View Live Demo](https://AddyTheDeveloper.github.io/todo-app/)**

---

## ✨ Stellar Features

-   **💎 Ultra-Modern UI:** Stunning Glassmorphism card layout with 24px blur, subtle border shimmers, and dynamic background blobs.
-   **🎭 Advanced Animations:** Fluid entry/exit transitions, hover-based 3D tilts, and custom-animated checkboxes.
-   **📂 Task Hierarchy:** Support for titles, detailed descriptions, and three levels of priority (Low, Medium, High).
-   **📅 Time Tracking:** Set due dates for your missions and track progress in real-time.
-   **📊 Progress Visualization:** Interactive progress bar that tracks your fleet's completion percentage.
-   **🌓 Theme Switching:** Seamlessly toggle between "Deep Space" (Dark) and "Nebula White" (Light) modes.
-   **💾 Persistence:** Your mission data is automatically synced to `localStorage` for cross-session continuity.
-   **📱 Fully Responsive:** Carefully crafted media queries ensure a premium experience on mobile, tablet, and desktop.
-   **⌨️ Power User Support:** Lightning-fast task entry with keyboard shortcuts (`Enter` to launch, `Escape` to cancel).
-   **🔔 Toast Notifications:** Real-time feedback via custom-styled toast alerts for every action.

---

## 🛠️ Tech Stack & Architecture

### **Core Frameworks**
-   **React 19:** Utilizing latest hooks (`useState`, `useEffect`) and functional components.
-   **Vite:** High-performance frontend tooling for instant HMR.

### **Styling & Design**
-   **Vanilla CSS:** Custom properties (CSS variables) drive the entire theme system.
-   **Glassmorphism:** Leveraging `backdrop-filter` and semi-transparent HSL color palettes.
-   **Animations:** Pure CSS `@keyframes` and transitions for high-performance UI feedback.

### **State & Tools**
-   **LocalStorage API:** Zero-backend data persistence.
-   **Lucide-like SVGs:** Hand-crafted, semantic SVG icons for a lightweight footprint.
-   **GitHub Pages:** Automated deployment via `gh-pages` integration.

---

## 📁 Project Structure

```text
todo-app/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and global icons
│   ├── components//        # Modular UI Components
│   │   ├── Header.jsx      # Branding & Top Navigation
│   │   ├── TodoInput.jsx   # Task creation with advanced options
│   │   ├── TodoList.jsx    # Managed list container
│   │   ├── TodoItem.jsx    # Individual task logic & 3D hover
│   │   ├── Filters.jsx     # Status filtering logic
│   │   ├── ProgressBar.jsx # Progress visualization
│   │   ├── ThemeToggle.jsx # Theme switching logic
│   │   ├── Toast.jsx       # Global notification system
│   │   └── ...             # Decorative background elements
│   ├── App.jsx             # Root logic & state management
│   ├── index.css           # Global design system & animations
│   └── main.jsx            # React entry point
├── package.json            # Scripts & dependencies
└── vite.config.js          # Build configuration
```

---

## 💻 Local Setup Instructions

1.  **Clone the Mission Logs:**
    ```bash
    git clone https://github.com/AddyTheDeveloper/todo-app.git
    cd todo-app
    ```

2.  **Fuel Up (Install Dependencies):**
    ```bash
    npm install
    ```

3.  **Ignition (Start Dev Server):**
    ```bash
    npm run dev
    ```

4.  **Launch:**
    Open `http://localhost:5173/` in your favorite browser.

---

## 🌐 Deployment to GitHub Pages

This project is pre-configured for automated deployment.

1.  Update the `homepage` in `package.json`.
2.  Set the `base` path in `vite.config.js` to your repository name.
3.  Deploy with a single command:
    ```bash
    npm run deploy
    ```

---

## 👤 Author
**Aditya Hans**  
*Full Stack Developer & UI Enthusiast*

-   **GitHub:** [@AddyTheDeveloper](https://github.com/AddyTheDeveloper)
-   **LinkedIn:** [adityahans17](https://linkedin.com/in/adityahans17)
-   **Email:** [adityahans.17@gmail.com](mailto:adityahans.17@gmail.com)

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
