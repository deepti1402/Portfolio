# Deepti Singh - Biomedical Engineer Portfolio

![Portfolio Hero](https://img.shields.io/badge/Status-Live-success) ![License](https://img.shields.io/badge/License-MIT-blue)

A professional, high-performance portfolio website designed for **Deepti Singh**, a Biomedical Engineer with 3 years of experience. This project showcases technical expertise, equipment mastery, and professional achievements using a modern, 3D-inspired web interface.

## 🌟 Key Features

### "Royal Innovation" Design
- **Theme**: A premium **Royal Indigo & Rose** aesthetic (Deep Indigo `#6366f1` & Vibrant Rose `#f43f5e`).
- **Dark/Light Mode**: Fully dynamic theme switching with persistent state.
- **Visuals**: Glassmorphism effects, 3D floating cards, and animated gradients.

### Core Functionalities
- **Equipment Expertise**: Interactive grid displaying proficiency with Life-Support, Monitoring, and Diagnostic systems.
- **Direct Scheduling**: Integrated **Cal.com** embed allows visitors to book meetings directly. Uses dynamic theming to match the site's mode.
- **Resume Download**: One-click access to the professional resume from the sticky navigation bar.
- **Responsive Layout**: Optimized for Mobile, Tablet, and Desktop views.

## 🛠️ Technology Stack

- **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) (Fast HMR & Optimized Builds)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: native CSS animations + Tailwind utilities
- **Icons**: [Lucide React](https://lucide.dev/)
- **Scheduling**: [@calcom/embed-react](https://cal.com/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/deepti1402/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/             # Reusable UI components (Section, ThemeProvider)
│   ├── Navbar.tsx      # Sticky navigation with Theme Toggle
│   ├── Hero.tsx        # Landing section with 3D effects
│   ├── About.tsx       # Bio and Core Responsibilities
│   ├── Skills.tsx      # Expertise grid with gradients
│   ├── Equipment.tsx   # Detailed equipment showcase
│   ├── Contact.tsx     # Cal.com integration & Social links
│   └── Footer.tsx      # Copyright and credits
├── App.tsx             # Main application layout
└── main.tsx            # Entry point with ThemeProvider
```

## 🎨 Customization

### Changing the Theme
The theme configuration is located in `tailwind.config.js`. You can modify the `brand` and `accent` colors to change the entire look of the application.

```javascript
// tailwind.config.js
colors: {
  'brand': { ... }, // Primary colors
  'accent': { ... } // Secondary/Highlight colors
}
```

## 📄 License
This project is open source and available under the [MIT License](LICENSE).


