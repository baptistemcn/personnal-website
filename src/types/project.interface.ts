export interface ProjectProps {
  project?: Array<ProjectItem>;
}

export interface ProjectItem {
  title: string;
  description: string;
  host?: HostItem;
}

interface HostItem {
  name: string;
  url: string;
}
