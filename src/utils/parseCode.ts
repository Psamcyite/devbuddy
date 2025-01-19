import { CodeAnalyzerResult } from "@/types";

export const analyzeCode = (code: CodeAnalyzerResult): object => {
  const codeString = String(code);
  const lines = codeString.split("\n").length;
  const words = codeString.split(/\s+/).length;
  const functions = (codeString.match(/function|=>/g) || []).length;

  return {
    lines,
    words,
    functions,
  };
};
