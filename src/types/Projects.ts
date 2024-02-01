export interface ProjectsData {
    id: string;
    title: string;
    domain: string;
    duration: number;
    teamSize: number;
    skillLevel: string;
    complexity: string;
  };

  export interface RegisterProjectData {
    title: string;
    description: string;
    domainId: string;
    duration?: number;
    teamSize?: number;
    skillLevel?: string;
    complexity?: string;
    projectYear?: Date;
    platform?: string;
    languages?: string[];
    uiDesignLink?: string | undefined;
    githubLink?: string | undefined;
    screenshot?: File | undefined;
    documentation?: File | undefined;
    createdBy?: string
  };

  export interface LatestProjectsData {
    id: string,
    domain: string,
    title: string,
    projectYear: Date,
    owner: string
  }

  export interface ProjectDetailData {
    id: string,
    title: string;
    description: string;
    domainId: string;
    domain: string;
    duration?: number;
    teamSize?: number;
    skillLevel?: string;
    complexity?: string;
    projectYear?: Date;
    owner?: string
  };