"use client"
import React, { useState } from "react";
import { analyzeCode } from "@/utils/parseCode";
import { CodeAnalyzerResult } from "@/types";

const CodeAnalyzer = () => {
  const [code, setCode] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<CodeAnalyzerResult>({
    lines: 0,
    words: 0,
    functions: 0,
    split: (arg0: string) => { return []; }
  });

  const handleAnalyze = () => {
    const result = analyzeCode(code);
    setAnalysisResult(result);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Code Analyzer</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full mt-4 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-30000"
        rows={6}
        placeholder="Paste your code here..."
      ></textarea>
      <button
        onClick={handleAnalyze}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Analyze Code
      </button>
      {analysisResult && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Analysis Result:</h3>
          <p className="mb-1">Lines of Code: {analysisResult.lines}</p>
          <p className="mb-1">Words: {analysisResult.words}</p>
          <p className="mb-1">Functions: {analysisResult.functions}</p>
        </div>
      )}
    </div>
  );
};

export default CodeAnalyzer;
