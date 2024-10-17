export type SkillName =
  'Azure' |
  'GCP' |
  'CSS' |
  'SCSS' |
  'TypeScript' |
  'JavaScript' |
  'HTML' |
  'NodeJS' |
  'Tailwind CSS' |
  'React' |
  'Jest' |
  'Express.js' |
  'Kubernetes' |
  'Docker' |
  'NestJS' |
  'Angular' |
  'Linux' |
  'Wordpress' |
  'PHP' |
  'Git' |
  'Gitlab' |
  'Github' |
  'Teamcity' |
  'Jenkins' |
  'Professional Scrum Master' |
  'Terraform' |
  'Loopback' |
  'RabbitMQ' |
  'PostgreSQL' |
  'Oracle PL/SQL' |
  'Helm' |
  'Vue.js' |
  'Apache' |
  'Laravel' |
  'Solr' |
  'Elasticsearch' |
  'MySQL';

export type SkillIcon =
  'azure' |
  'gcp' |
  'css' |
  'scss' |
  'typescript' |
  'javascript' |
  'html' | 'nodejs' |
  'tailwind' |
  'react' |
  'jest' |
  'express' |
  'kubernetes' |
  'docker' |
  'nestjs' |
  'angular' |
  'linux' |
  'wordpress' |
  'php' |
  'git' |
  'gitlab' |
  'tc' |
  'github' |
  'teamcity' |
  'jenkins' |
  'psm' |
  'terraform' |
  'loopback' |
  'rabbitmq' |
  'postgresql' |
  'oracle' |
  'helm' |
  'vue' |
  'apache' |
  'laravel' |
  'solr' |
  'elasticsearch' |
  'mysql';


export interface Skill {
  name: SkillName,
  icon: SkillIcon
}

export interface Project {
  name: string;
  date: string;
  description: string;
  skills: Skill[]
}


export interface Course {
  name: string;
  description: string;
  date?: string;
  url?: string;
  cert_url?: string;
  duration?: string;
  skills: Skill[]
}
