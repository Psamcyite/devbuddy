# **DevBuddy**

Your all-in-one developer productivity assistant. 🚀  
"DevBuddy" simplifies and automates repetitive tasks, helping developers focus on writing great code!

---

## **Table of Contents**

1. [Description](#description)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Dirctory Structure](#directory-structure)
7. [Contributing](#contributing)  
8. [License](#license)
9. [Acknowledgments](#acknowledgments)

---

## **Description**

**DevBuddy** is a developer-centric web app designed to boost productivity. It provides tools to visualize file structures, perform static code analysis, and generate README templates. Whether you're a beginner or an experienced developer, DevBuddy has something to streamline your workflow.

---

## **Features**

✅ **File Structure Visualizer**  
Generate a tree-like structure for any directory, making it easier to navigate large projects.  

✅ **Code Review Assistant**  
Static code analysis to identify unused imports, overly long functions, and potential issues.  

✅ **README Generator**  
Create professional-looking README templates based on your project's `package.json`.  

---

## **Tech Stack**

- **Framework**: [Next.js](https://nextjs.org/)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS  
- **Animation**: Framer Motion  

---

## **Getting Started**

Follow these steps to set up the project locally.

### **Prerequisites**

- Node.js (v18 or higher)  
- npm, yarn, or pnpm (preferably pnpm)  

### **Installation**

1. Clone the repository:  
   ```bash
   git clone https://github.com/Psamcyite/devbuddy.git
   cd devbuddy
   ```

2. Install dependencies:  
   ```bash
   pnpm install
   ```

3. Create a `.env` file:  
   ```bash
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the development server:  
   ```bash
   pnpm dev
   ```

5. Visit the app at [http://localhost:3000](http://localhost:3000).

---

## **Usage**

### **1. File Structure Visualizer**
Upload your project (zip) folder and view its structure in a collapsible tree format.  

### **2. Code Review Assistant**
Paste your code into the editor, and DevBuddy will analyze and suggest improvements.  

### **3. README Generator**
Provide your content to generate a customizable README template.  

---

## **Directory Structure**

```bash
challenge/devbuddy/
├── next/
├── node_modules/
├── public/
│   └── assets/logo/
│       ├── buddy.png
│       └── buddy.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── CodeAnalyzer.tsx
│   │   ├── File Tree Visualizer.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ReadmeGenerator.tsx
│   ├── lib/
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       ├── fileTree.ts
│       ├── generateReadme.ts
│       └── parseCode.ts
├── .gitignore
├── components.json
├── eslint.config.mjs
├── LICENSE
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock
```

---

## **Contributing**

Contributions are welcome! 🎉  

1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature/your-feature-name
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add your message here"
   ```  
4. Push the branch:  
   ```bash
   git push origin feature/your-feature-name
   ```  
5. Open a Pull Request.  

---

## **License**

This project is licensed under the [MIT License](LICENSE).  

---

## **Acknowledgments**

Thanks to the GitHub Copilot 1-Day Build Challenge for inspiring this project! 🚀

---
