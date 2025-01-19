import { ReadmeData } from "../types";

const ensureArray = (value: any): string[] =>
  Array.isArray(value) ? value : typeof value === "string" ? [value] : [];

export const generateReadme = (data: ReadmeData): string => {
  const {
    projectName = "Project Name",
    tagline = "",
    description = "Project Description",
    features = "",
    techStack = "",
    prerequisites = "",
    installationSteps = "",
    usageSteps = "",
    directoryStructure = "",
    contributionSteps = "",
    license = "License",
    acknowledgments = "",
  } = data;

  return `
# **${projectName}**

${tagline ? `${tagline} 🚀` : ""}  
${description}

---

## **Table of Contents**

1. [Description](#description)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Directory Structure](#directory-structure)  
7. [Contributing](#contributing)  
8. [License](#license)  
9. [Acknowledgments](#acknowledgments)

---

## **Description**

${description}

---

## **Features**

${features
    ? features.split("\n").map((feature) => `✅ **${feature.trim()}**`).join("\n")
    : "No features listed."}

---

## **Tech Stack**

${techStack
    ? techStack
        .split("\n")
        .map((item) => `- ${item.trim()}`)
        .join("\n")
    : "No tech stack listed."}

---

## **Getting Started**

### **Prerequisites**

${prerequisites
    ? prerequisites
        .split("\n")
        .map((item) => `- ${item.trim()}`)
        .join("\n")
    : "No prerequisites listed."}

### **Installation**

${installationSteps
    ? installationSteps
        .split("\n")
        .map((step, index) => `${index + 1}. ${step.trim()}`)
        .join("\n")
    : "No installation steps listed."}

---

## **Usage**

${
  usageSteps
    ? usageSteps
        .split("\n")
        .map((step, index) => {
          const [title, description] = step.split(":").map((part) => part.trim());
          const stepTitle = title || `Step ${index + 1}`;
          const stepDescription = description || "No description provided.";
          return `### **${stepTitle}**\n${stepDescription}`;
        })
        .join("\n\n")
    : "No usage steps listed."
}

---

## **Directory Structure**

\`\`\`bash
${directoryStructure || "No directory structure provided."}
\`\`\`

---

## **Contributing**

${contributionSteps
    ? contributionSteps
        .split("\n")
        .map((step, index) => `${index + 1}. ${step.trim()}`)
        .join("\n")
    : "No contribution steps listed."}

---

## **License**

This project is licensed under the **${license}** License.  

---

## **Acknowledgments**

${acknowledgments
    ? acknowledgments.split("\n").map((item) => `- ${item.trim()}`).join("\n")
    : "No acknowledgments listed."}

---
  `.trim();
};
