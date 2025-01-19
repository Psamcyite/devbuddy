export interface fileTree {
    [key: string]: fileTree | string;
}

export interface CodeAnalyzerResult {
    split(arg0: string): unknown;
    lines: number;
    words: number;
    functions: number;
}

export type ViewMode = "editor" | "preview";

export interface ReadmeData {
    projectName: string;
    tagline: string;
    description: string;
    features: string;
    techStack: string;
    prerequisites: string;
    installationSteps: string;
    usageSteps: string;
    directoryStructure: string;
    contributionSteps: string;
    license: string;
    acknowledgments: string;
};