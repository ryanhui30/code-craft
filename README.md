# Code Craft 🚀  
**The Ultimate SaaS Online IDE**  

[Live Demo](https://code-craft-demo.vercel.app) | [GitHub](https://github.com/ryanhui30/code-craft)  

---

## ✨ Key Features  
- **💻 Multi-Language IDE**  
  Supports 10+ languages with real-time execution  
- **🎨 Theme Customization**  
  5 VSCode-inspired themes with dark/light mode  
- **📊 Execution Analytics**  
  Track success/error states with detailed output logging  
- **🔍 Smart Search**  
  Advanced filtering for community code snippets  
- **👤 Personalized Workspace**  
  Font sizing controls and execution history  
- **🤝 Community Sharing**  
  Publish, discover, and comment on code snippets with peers  

---

## 🛠️ Tech Stack  

### Core Platform  
| Technology       | Use Case                     |
|------------------|------------------------------|
| Next.js 15       | App Router & Server Actions  |
| Convex           | Real-time Database           |
| Clerk            | Auth & User Profiles         |
| TypeScript       | Type-Safe Codebase           |

### Editor Experience  
| Component        | Technology                   |
|------------------|------------------------------|
| Code Execution   | Docker + WebAssembly         |
| Syntax Highlight | React Syntax Highlighter     |
| UI Components    | Shadcn + Tailwind CSS        |

### Integrations  
| Service          | Functionality                |
|------------------|------------------------------|
| Webhooks         | Third-party Integrations     |
| Vercel Analytics | Usage Monitoring             |
| GitHub API       | Code Import/export           |
| Convex           | Real-time Database           |
| Lemon Squeezy    | Saas Payment                 |

---

## 🚀 Getting Started

### Prerequisites  
- Node.js v18+  
- Convex account  
- Clerk application  

### Installation  
```bash
git clone https://github.com/ryanhui30/code-craft.git
cd code-craft
npm install
cp .env.example .env.local
```

### Environment Variables
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Convex DB
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT_KEY=
```

### Running the App
```bash
npm run dev          # Start dev server
npx convex dev       # Launch Convex
```

## **Need Help**?
📩 Contact: ryanhui30@gmail.com




