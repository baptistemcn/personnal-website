export interface ProjectProps {
  project: Array<ProjectItem>;
}

interface ProjectItem {
  name: string;
  presentation: string;
  github: GithubItem;
  hosted: HostItem;
}

interface GithubItem {
  name: string;
  url: string;
}

interface HostItem {
  name: string;
  url: string;
}
