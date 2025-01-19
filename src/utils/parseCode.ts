import { CodeAnalyzerResult } from "../types";

export const analyzeCode = (code: string): CodeAnalyzerResult => {
  // Return a valid CodeAnalyzerResult object
  return {
    lines: code.split("\n").length,
    words: code.split(/\s+/).length,
    functions: (code.match(/function\s/g) || []).length,
    split: (arg0: string) => code.split(arg0),
  };
};
