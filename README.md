# MacBook Pro Landing Page Clone 💻

Welcome to the **MacBook Pro Landing Page Clone**, a stunning, highly interactive web experience inspired by Apple's official product pages. This project pushes the boundaries of web animation and 3D rendering to deliver a premium user experience.

## ✨ Features

- **Immersive 3D Models:** Features high-quality, interactive 3D rendering of the MacBook Pro using `@react-three/fiber` and `@react-three/drei`.
- **Advanced Scroll Animations:** Smooth, cinematic scrolling effects and timeline animations powered by **GSAP** (GreenSock Animation Platform) and its `ScrollTrigger` plugin.
- **Dynamic Video Textures:** 3D models showcase video textures playing directly on the virtual screen, synced perfectly with user scrolling.
- **Global State Management:** Seamlessly manages application states (such as model color and size variations) using **Zustand**.
- **Fully Responsive Design:** Crafted meticulously with **Tailwind CSS** to look flawless across all device sizes—from mobile to ultra-wide desktop monitors.
- **Modern Build Tooling:** Lightning-fast development and optimized production builds courtesy of **Vite**.

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Rendering:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Animations:** [GSAP](https://gsap.com/) & ScrollTrigger
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (or navigate to the project directory):
   ```bash
   git clone <your-repo-url>
   cd "MackBook Landing Page"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

## 📦 Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will generate a `dist` folder containing all the compiled and minified static assets ready for deployment.

## 📂 Project Structure

- `src/components/` - React components including UI sections and the 3D `<Canvas>` setup.
- `src/components/models/` - Configured 3D mesh components (e.g., `Macbook.jsx`).
- `src/constants/` - Static data for dynamic rendering (nav links, feature definitions, animation sequences).
- `src/store/` - Zustand global state configurations.
- `public/` - Static assets, videos, images, and 3D model files (`.glb`).
- `src/index.css` - Global stylesheet managing font faces, custom Tailwind utilities, and deep styling overrides.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
