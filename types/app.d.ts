interface NavLink {
  href: string;
  name: string;
  icon: string;
}

interface Skill {
  title: string;
  skills: string[];
}

interface Project {
  title: string;
  description: string;
  year: string;
  href?: string,
  src?: string;
}
