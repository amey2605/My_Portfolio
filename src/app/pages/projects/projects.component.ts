import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  client: string;
  domain: string;
  duration: string;
  description: string;
  responsibilities: string[];
  link: string;
  expanded?: boolean; // track toggle state
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']  // fixed typo here: styleUrl -> styleUrls
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Telecom Service Optimization Platform',
      client: 'Deutche Telekom, Germany',
      domain: 'Telecom',
      duration: 'Aug 2022 – Nov 2023',
      description: `Developed and maintained a web-based CRM-T platform designed to streamline telecom service delivery, real-time monitoring, service automation, and issue tracking for internal teams and partners.`,
      responsibilities: [
        'Built and maintained responsive UI components using Angular 8.',
        'Integrated backend REST APIs developed in Spring Boot.',
        'Developed custom directives, pipes, and interceptors for enhanced code reusability.',
        'Developed backend services with Java and Spring Boot to support frontend operations.',
        'Participated in defect triage meetings and deployed code to lower environments.',
        'Followed Agile Scrum practices and participated in sprint ceremonies.',
        'Created unit tests using Jasmine and Karma to ensure robust code quality.'
      ],
      link: "",
      expanded: false
    },
    {
      title: 'Regulatory Compliance Dashboard',
      client: 'Credit Suisse (UBS), Switzerland',
      domain: 'Investment Banking | RegTech',
      duration: 'Nov 2023 – April 2024',
      description: `Built a regulatory compliance dashboard to automate financial reporting, manage workflows, reporting of OTC trades, and ensure regulatory adherence for investment banking clients.`,
      responsibilities: [
        'Developed dynamic and reusable Angular 15+ components for seamless user interactions.',
        'Created backend services with Spring Boot and managed API integrations.',
        'Handled file parsing, API response mapping, and service error handling.',
        'Ensured responsiveness across devices using media queries and layout libraries.',
        'Wrote and maintained unit and integration test cases using Jasmine and Karma.',
        'Performed backend log debugging, defect fixing, and performance optimization activities.',
        'Worked closely with cross-functional teams under Agile Scrum methodology.'
      ],
      link: "",
      expanded: false
    },
    {
      title: 'Social Media Site(Personal Project)',
      client: 'NA',
      domain: 'Social media platform',
      duration: 'May 2025 – May 2025',
      description: `This is a simple social media app I made using Angular and Springboot
  ,  Please note:  I have deployed application on free servers so it has a problem of cold start i.e. they stop services after certain intervals of nactivity so when we try to login/signIn after long time it will take 10-15 mins to start services
      `,
      responsibilities: [
        'Developed front end components using Angular framework.',
        'Created Rest API using SpringBoot and Java',
        'Integrated Rest API with database and implemented CRUD operations',
        'Integrated API with Angular using HTTPCLient Module',
        'Deployed application on basic free servers available on internet'
      ],
      link: "https://socialsiteangular.web.app/login",
      expanded: false
    }
  ];

  toggleProject(project: Project) {
    project.expanded = !project.expanded;
  }
}
