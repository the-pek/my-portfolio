import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  slug: string;
  title: string;
  context: string;
  description: string;
  points: string[];
  stacks: string[];
  link?: { label: string; url: string };
}

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
})

export class Projects {
  protected readonly projects: Project[] = [
    {
      slug: 'pizziea',
      title: 'Pizziea — Optimisation de livraisons',
      context: "Projet d'études · challenge technique",
      description:
        "Application Spring Boot pour un concours d'optimisation de tournées de livraison, avec interface temps réel.",
      points: [
        'Conçu 4 stratégies de résolution (glouton, tri par profit, recherche exhaustive de paires, évitement de la concurrence)',
        "Implémenté un client d'API REST (WebClient) et une UI temps réel (Thymeleaf + WebSocket)",
        'Couvert le solveur par des tests unitaires JUnit / Mockito',
      ],
      stacks: ['Java', 'Spring Boot', 'WebClient', 'Thymeleaf', 'WebSocket', 'JUnit', 'Mockito'],
      // link: { label: 'Voir le code', url: 'https://github.com/ton-compte/pizziea' },
    },
    {
      slug: 'app-angular-django',
      title: "Refonte & sécurisation d'une application Angular/Django",
      context: 'Contexte professionnel',
      description:
        "Reprise de l'architecture d'une application web full-stack, avec un focus sécurité et traçabilité.",
      points: [
        "Refondu l'architecture, améliorant la maintenabilité et la lisibilité du code",
        "Conçu un contrôle d'accès par rôles (RBAC) selon les profils utilisateurs",
        'Développé un module d\u2019audit assurant la traçabilité des opérations critiques',
        'Participé aux revues de code et aux bonnes pratiques (Git/GitLab, Agile/Scrum)',
      ],
      stacks: ['Angular', 'TypeScript', 'Django', 'Python', 'PostgreSQL', 'Git/GitLab'],
    },
    {
      slug: 'integration-api',
      title: "Intégration & tests d'API partenaires",
      context: 'Contexte professionnel',
      description: "Validation et documentation de services d'API partenaires.",
      points: [
        "Réalisé des tests d'intégration sur des API partenaires avec Postman",
        'Documenté les endpoints et les scénarios de test (maintenabilité, onboarding)',
        'Analysé et proposé des évolutions fonctionnelles pour la plateforme',
      ],
      stacks: ['API REST', 'Postman', 'Python', 'Django', 'MySQL'],
    },
  ];
}
