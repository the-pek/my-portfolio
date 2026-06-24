import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type Kind = 'pro' | 'perso';

interface Project {
  kind: Kind;
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
  /** Volet actif (le "sous-fichier" ouvert). */
  protected readonly active = signal<Kind>('pro');

  protected readonly tabs = [
    { key: 'pro' as Kind, label: 'Pro' },
    { key: 'perso' as Kind, label: 'Perso & académique' },
  ];

  protected select(k: Kind): void {
    this.active.set(k);
  }

  protected readonly projects: Project[] = [
    {
      kind: 'pro',
      slug: 'app-angular-django',
      title: "Refonte & sécurisation d'une application Angular/Django",
      context: 'Contexte professionnel',
      description:
        "Reprise de l'architecture d'une application web full-stack, axée sécurité et traçabilité.",
      points: [
        "Refonte de l'architecture (maintenabilité, lisibilité du code)",
        "Conçu un contrôle d'accès par rôles (RBAC) selon les profils",
        "Développé un module d'audit des opérations critiques",
        'Revues de code et bonnes pratiques (Git/GitLab, Agile/Scrum)',
      ],
      stacks: ['Angular', 'TypeScript', 'Django', 'Python', 'OracleDB', 'Git/GitLab'],
    },
    {
      kind: 'pro',
      slug: 'integration-api',
      title: "Intégration & tests d'API partenaires",
      context: 'Contexte professionnel',
      description: "Validation et documentation de services d'API partenaires.",
      points: [
        "Tests d'intégration d'API partenaires avec Postman",
        'Documenté les endpoints et scénarios de test (onboarding facilité)',
        'Proposé des évolutions fonctionnelles pour la plateforme',
      ],
      stacks: ['API REST', 'Postman', 'Suite office'],
    },
    {
      kind: 'perso',
      slug: 'portfolio',
      title: 'Ce portfolio',
      context: 'Projet personnel',
      description: "Portfolio sur une interface inspirée d'un éditeur de code, développé de zéro.",
      points: [
        'Architecture standalone, signals et lazy loading (Angular 22)',
        'Thème sombre maison avec Tailwind v4',
        'Formulaire de contact avec envoi direct (sans back-end)',
      ],
      stacks: ['Angular', 'TypeScript', 'Tailwind CSS', 'Signals'],
      link: { label: 'Voir le code', url: 'https://github.com/the-pek/my-portfolio' },
    },
    {
      kind: 'perso',
      slug: 'pizziea',
      title: 'Pizziea - Optimisation de livraisons',
      context: "Projet d'études · challenge technique",
      description: "Application Spring Boot pour un concours d'optimisation de tournées, avec interface temps réel.",
      points: [
        'Conçu 4 stratégies de résolution (dont une recherche exhaustive de paires)',
        "Client d'API REST (WebClient) et UI temps réel (Thymeleaf + WebSocket)",
        'Tests unitaires JUnit / Mockito sur le solveur',
      ],
      stacks: ['Java', 'Spring Boot', 'WebSocket', 'JUnit', 'Mockito'],
      // link: { label: 'Voir le code', url: 'https://github.com/ton-compte/pizziea' },
    },
    {
      kind: 'perso', // ← ajuste : 'pro' ou 'perso'
      slug: 'festicore',
      title: 'Festicore',
      context: 'À compléter', // ex. "Projet d'études" / "Projet personnel"
      description: 'À compléter — une phrase qui décrit le projet.',
      points: ['À compléter — réalisation clé', 'À compléter — réalisation clé',
      ],
      stacks: [],
      // link: { label: 'Voir le code', url: 'https://github.com/ton-compte/festicore' },
    },
    {
      kind: 'perso', // ← ajuste : 'pro' ou 'perso'
      slug: 'projet-dotnet', // ← renomme (ex. nom réel du projet)
      title: 'Projet .NET', // ← titre réel
      context: 'À compléter',
      description: 'À compléter — une phrase qui décrit le projet.',
      points: ['À compléter — réalisation clé', 'À compléter — réalisation clé'],
      stacks: ['C#', '.NET'], // ← complète (ex. ASP.NET, Entity Framework, SQL Server…)
    },
  ];

  protected readonly visible = computed(() =>
    this.projects.filter((p) => p.kind === this.active()),
  );
}
