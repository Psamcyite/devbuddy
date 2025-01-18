export const analyzeCode = (code: string): object => {
  const lines = code.split("\n").length;
  const words = code.split(/\s+/).length;
  const functions = (code.match(/function|=>/g) || []).length;

  return {
    lines,
    words,
    functions,
  };
};
