
---

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

**DevBuddy** is a developer-centric web app designed to boost productivity. It provides tools to visualize file structures, perform static code analysis, generate README templates, and even integrate AI-powered code reviews. Whether you're a beginner or an experienced developer, DevBuddy has something to streamline your workflow.

---

## **Features**

✅ **File Structure Visualizer**  
Generate a tree-like structure for any directory, making it easier to navigate large projects.  

✅ **Code Review Assistant**  
Static code analysis to identify unused imports, overly long functions, and potential issues.  

✅ **README Generator**  
Create professional-looking README templates based on your project's `package.json`.  

✅ **AI-Powered Suggestions**  
Leverage OpenAI to get tailored feedback and suggestions for your code.  

---

## **Tech Stack**

- **Framework**: [Next.js](https://nextjs.org/)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS  
- **Animation**: Framer Motion  
- **AI Integration**: OpenAI API  
- **Code Parsing**: Babel  

---

## **Getting Started**

Follow these steps to set up the project locally.

### **Prerequisites**

- Node.js (v18 or higher)  
- npm, yarn, or pnpm (preferably pnpm)  
- OpenAI API Key ([Get one here](https://platform.openai.com/signup/))  

### **Installation**

1. Clone the repository:  
   ```bash
   git clone https://github.com/Psamcyite/devbuddy.git
   cd devbuddy
   ```

Your all-in-one developer productivity assistant. 🚀  
"DevBuddy" simplifies and automates repetitive tasks, helping developers focus on writing great code!

---

## **Table of Contents**

1. [Description](#description)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [License](#license)

---

## **Description**

**Dev

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
Upload your project folder and view its structure in a collapsible tree format.  

### **2. Code Review Assistant**
Paste your code into the editor, and DevBuddy will analyze and suggest improvements.  

### **3. README Generator**
Provide your `package.json` content to generate a customizable README template.  

### **4. AI-Powered Suggestions**
Submit your code to receive AI-based suggestions for better structure and readability.  

---

## **Directory Structure**

```bash
src/
├── components/
│   ├── FileTreeVisualizer.tsx
│   ├── CodeAnalyzer.tsx
│   ├── ReadmeGenerator.tsx
│   ├── AiSuggestions.tsx
│   ├── Layout.tsx
├── pages/
│   ├── index.tsx
│   ├── api/
│   │   ├── analyze.ts
│   │   ├── generateReadme.ts
│   │   ├── suggest.ts
├── styles/
│   ├── globals.css
│   ├── tailwind.css
├── utils/
│   ├── parseCode.ts
│   ├── fileTree.ts
├── types/
│   ├── index.ts
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

Thanks to the GitHub Copilot 1-Day Build Challenge for inspiring this project!  

---