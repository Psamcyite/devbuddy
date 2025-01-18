import JSZip from "jszip";

export const parseFileTree = async (file: File): Promise<object> => {
  const zip = new JSZip();

  try {
    // Load the ZIP file
    const content = await zip.loadAsync(file);

    // Recursively build the file tree structure
    const buildTree = (files: JSZip.JSZipObject[], tree: any = {}) => {
      files.forEach((file) => {
        const parts = file.name.split("/").filter(Boolean); // Split into directory levels
        let current = tree;

        parts.forEach((part, index) => {
          if (index === parts.length - 1) {
            // Last part is the file
            current[part] = file.dir ? {} : "File";
          } else {
            // Intermediate parts are directories
            current[part] = current[part] || {};
            current = current[part];
          }
        });
      });

      return tree;
    };

    const filesArray = Object.values(content.files);
    const fileTree = buildTree(filesArray);

    return fileTree;
  } catch (error) {
    console.error("Error parsing ZIP file:", error);
    throw new Error("Failed to parse the file tree.");
  }
};
