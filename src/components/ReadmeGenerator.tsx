"use client";
import React, { useState, useCallback } from "react";
import { ReadmeData, ViewMode } from "../types";
import { generateReadme } from "../utils/generateReadme";
import { motion } from "framer-motion";

const ReadmeGenerator = () => {
  const [formData, setFormData] = useState<ReadmeData>({
    projectName: "",
    tagline: "",
    description: "",
    features: "",
    techStack: "",
    prerequisites: "",
    installationSteps: "",
    usageSteps: "",
    directoryStructure: "",
    contributionSteps: "",
    license: "",
    acknowledgments: "",
  });

  const [generatedReadme, setGeneratedReadme] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [viewMode, setViewMode] = useState<ViewMode>("editor");
  const [warnings, setWarnings] = useState<{ [key in keyof ReadmeData]?: string }>({});

  const validateInputs = (): boolean => {
    const newWarnings: { [key in keyof ReadmeData]?: string } = {};

    Object.keys(formData).forEach((key) => {
      if (typeof formData[key as keyof ReadmeData] === "string" && !formData[key as keyof ReadmeData]) {
        newWarnings[key as keyof ReadmeData] = `${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")} is required.`;
      }
    });

    setWarnings(newWarnings);
    return Object.keys(newWarnings).length === 0;
  };

  const handleGenerate = () => {
    if (validateInputs()) {
      setGeneratedReadme(generateReadme(formData));
      setViewMode("preview");
      window.scrollTo(0, 0);
    }
  };

  const handleCopyToClipboard = () => {
    if (generatedReadme) {
      navigator.clipboard
        .writeText(generatedReadme)
        .then(() => {
          setCopySuccess("Copied to clipboard!");
          setTimeout(() => setCopySuccess(""), 3000);
        })
        .catch(() => {
          setCopySuccess("Failed to copy!");
        });
    }
  };

  const handleInputChange = useCallback((field: keyof ReadmeData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (warnings[field]) {
      setWarnings((prev) => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }
  }, [warnings]);

  const resetReadmeData = (): ReadmeData => ({
    projectName: "",
    tagline: "",
    description: "",
    features: "",
    techStack: "",
    prerequisites: "",
    installationSteps: "",
    usageSteps: "",
    directoryStructure: "",
    contributionSteps: "",
    license: "",
    acknowledgments: "",
  });

  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-cyan-900 via-sky-700 to-blue-900 text-white rounded-md shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <h1 className="text-3xl font-bold mb-6">README Generator</h1>

      {viewMode === "editor" ? (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
        >
          <div className="space-y-4">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block font-semibold">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}:
                </label>
                <textarea
                  value={typeof formData[key as keyof ReadmeData] === "string" ? formData[key as keyof ReadmeData] as string : JSON.stringify(formData[key as keyof ReadmeData] ?? "")}
                  onChange={(e) => handleInputChange(key as keyof ReadmeData, e.target.value)}
                  className={`w-full p-2 rounded-md text-black ${
                    warnings[key as keyof ReadmeData] ? "border-red-400 border-2" : ""
                  }`}
                  rows={["description", "features", "installationSteps", "usageSteps"].includes(key) ? 6 : 3}
                  placeholder={`Enter details for ${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}`}
                />
                {warnings[key as keyof ReadmeData] && (
                  <p className="text-red-500 text-sm mt-1">{warnings[key as keyof ReadmeData]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleGenerate}
              className="px-4 py-2 bg-gray-900 rounded-md hover:bg-green-600"
              aria-label="Generate and preview README"
            >
              Generate & Preview
            </button>
            <button
              onClick={() => setFormData(resetReadmeData())}
              className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
              aria-label="Reset form"
            >
              Reset
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Generated README</h2>
          <pre className="bg-white text-black p-4 rounded-md whitespace-pre-wrap">
            {generatedReadme}
          </pre>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setViewMode("editor")}
              className="px-4 py-2 bg-blue-900 rounded-md hover:bg-blue-600"
              aria-label="Edit README"
            >
              Edit Again
            </button>
            <button
              onClick={handleCopyToClipboard}
              className="px-4 py-2 bg-yellow-700 rounded-md hover:bg-yellow-600"
              aria-label="Copy README to clipboard"
            >
              Copy to Clipboard
            </button>
          </div>
          {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ReadmeGenerator;