export interface CaseStudy {
  title: string;
  overview: string;
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
