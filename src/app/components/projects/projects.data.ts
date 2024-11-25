import { Project } from "@models/project.interface";

export const PROJECTS: Project[] = [
  {
    name: 'Staatsanzeiger tendering plattform',
    date: '2023 - 2024',
    description: `I worked in agile Scrum team to develop a tendering plattform (similar to Vergabe24) for Staatsanzeiger. This was the first project to be executed employing Scrum where we had strict and regular scrum events and regular iteration. Technically this project was unique and challenging for our team because we have implemented the project using kubernetes and terraform and rolled the app out on the MS Azure cloud. `,
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'Angular', icon: 'angular' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
      { name: 'Elasticsearch', icon: 'elasticsearch' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Helm', icon: 'helm' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Azure', icon: 'azure' },
    ]
  },
  {
    name: 'Online Academy',
    date: '2020 - 2023',
    description: `I developed the Academy website (akademie.staatsanzeiger.de) when the corona pandemic started. This project was needed to replace live events and trainings with online alternatives (courses and webinars). It was developed in an agile way with a lot of iterations, changes, implementation of new features and so on. After the pandemic, it's still actively used with webinars almost every day and it serves as a booking platform for live events.`,
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Wordpress', icon: 'wordpress' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Apache', icon: 'apache' },
    ]
  },
  {
    name: 'Work on internal REST-APIs',
    date: '2020 - 2024',
    description: `At the Staatsanzeiger I worked on many internal REST interfaces with the goal of moving data from one service to another. For example, I worked on interfaces for software products like "Zoom" video conferencing, "Mailjet" mailing client, "Administration Intelligence AG" software for tendering solutions, "eGecko" accounting software, and so on.`,
    skills: [
      { name: 'Linux', icon: 'linux' },
      { name: 'Apache', icon: 'apache' },
      { name: 'PHP', icon: 'php' },
      { name: 'NodeJS', icon: 'nodejs' },
    ]
  },
  {
    name: 'Work on Wordpress projects',
    date: '2020 - 2024',
    description: `At the Staatsanzeiger I helped to replace old TYPO3 sites with new Wordpress sites, e.g.: www.staatsanzeiger.de, ausschreibungen.staatsanzeiger.de, blog.staatsanzeiger.de, akademie.staatsanzeiger.de, agentur.staatsanzeiger.de. In most cases we've bought WP themes on the marketplace and then I've created and modified child themes according to our requirements. I took care of the following tasks: server and DNS administration, modifications, updates, plugin configuration, server migration (finally all WP instances were moved to a server with Plesk interface).`,
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Wordpress', icon: 'wordpress' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Apache', icon: 'apache' },
    ]
  },
  {
    name: 'Single Sign On (SSO) solution',
    date: '2020',
    description: `As the first task in the new job I and my team received SSO project. We have crafted a custom public solution (sso.staatsanzeiger.de) which was initially used exclusively for E-Paper customer (to manage their access rights), eventually this tool was introduced for other application like Online-Academy.`,
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Loopback', icon: 'loopback' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Apache', icon: 'apache' },
    ]
  },
  {
    name: 'Vergabe24 Tendering Plattform',
    date: '2018 - 2020',
    description: `I helped to develop and maintain the tendering platform vergabe24.de. My tasks included working on the homepage (Wordpress) and the customer app (custom PHP application), which has a search function and a function to apply for public tenders.
    In addition to that, I have worked on several internal application like customer management tool, statistics tool, CPV-Code search engine, accounting tool and some others.`,
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'PHP', icon: 'php' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Apache', icon: 'apache' },
      { name: 'Oracle PL/SQL', icon: 'oracle' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Solr', icon: 'solr' },
      { name: 'Wordpress', icon: 'wordpress' },
    ]
  }
]
