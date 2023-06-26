import github from "./github.png";
import linkedin from "./linkedin.png";

export const ICONS = [
  {
    img: `${github}`,
    link: "https://github.com/baptistemcn",
    name: "Github",
  },
  {
    img: `${linkedin}`,
    link: "https://www.linkedin.com/in/baptiste-marcon/",
    name: "Linkedin",
  },
];

const EXPERIENCES_FR = [
  {
    title: "Full-Stack Developper - NEHS Digital",
    presentation:
      "Dans mon rôle actuel, je me concentre sur le développement de nouvelles fonctionnalités, la création d'intégrations de design attrayantes et la gestion du code hérité, contribuant ainsi à l'évolution et à l'amélioration continues de nos produits.",
    duration: "Janv. 2022",
    technologies: [
      {
        name: "Angular",
      },
      {
        name: "RxJS",
      },
      {
        name: "SASS",
      },
      {
        name: "Jest",
      },
      {
        name: ".NET",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "Jenkins",
      },
    ],
  },
];

const EXPERIENCES_EN = [
  {
    title: "Full-Stack Developer - NEHS Digital",
    presentation:
      "In my current role, I focus on developing new features, creating appealing design integrations, and managing legacy code, thereby contributing to the continuous evolution and improvement of our products.",
    duration: "Janv. 2022",
    technologies: [
      {
        name: "Angular",
      },
      {
        name: "RxJS",
      },
      {
        name: "SASS",
      },
      {
        name: "Jest",
      },
      {
        name: "Rest API",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "Jenkins",
      },
    ],
  },
];

export const EXPERIENCES =
  navigator.language === "fr" ? EXPERIENCES_FR : EXPERIENCES_EN;

export const CERTIFICATES = [
  {
    name: "Modern Javascript by dev.ui",
    link: "https://ui.dev/c/modern-javascript/",
    finished: true,
  },
  {
    name: "Classic React by dev.ui",
    link: "https://ui.dev/c/classic-react/",
    finished: true,
  },
  {
    name: "React Hooks by dev.ui",
    link: "https://ui.dev/c/react-hooks/",
    finished: true,
  },
  {
    name: "React Router V5",
    link: "https://ui.dev/c/react-router-v5",
    finished: false,
  },
];

export const PROJECTS = [
  {
    name: "Spotify Profile",
    presentation: "Play with Spotify API",
    github: {
      name: "Spotify Profile",
      url: "https://github.com/baptistemcn/spotify-profile/",
    },
  },
];

export const FRENCH_FLAG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==";

export const US_FLAG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nO3YwQ3AIAxD0SyGMgPDshUSYoL01gHoiep9yQMgILEdAQDAH8g+6kRz7U+qFkdygHQD2xPyidMU2sboi0W2bOJiJZKZ29xosdNdoCmJrImUQ6ifWolQq5Ria2nmSrWYt5S7AADEhTw3HH3PGGqzVQAAAABJRU5ErkJggg==";
