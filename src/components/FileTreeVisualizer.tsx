"use client"
import React, { useState } from "react";
import { parseFileTree } from "../utils/fileTree";

const FileTreeVisualizer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileTree, setFileTree] = useState<object | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];

    if (uploadedFile) {
      setFile(uploadedFile);

      try {
        const tree = await parseFileTree(uploadedFile);
        setFileTree(tree);
      } catch (error) {
        console.error("Error parsing file:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">File Tree Visualizer</h2>
      <label className="block mb-4">
        <input
          type="file"
          accept=".zip"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-300 file:text-blue-700 hover:file:bg-blue-100"
        />
      </label>
      {fileTree && (
        <pre className="mt-4 bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(fileTree, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default FileTreeVisualizer;
