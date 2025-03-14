export interface Process {
  title: string;
  steps: string[];
}

export interface CaseStudy {
  title: string;
  overview: string;
  process?: Process[];
  features: string[];
  toolsUsed: string[];
  images: string[];
}

export interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  github: string;
  deploy: string;
  iconImages: string[];
  showCaseStudy: boolean;
  caseStudy?: CaseStudy;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}