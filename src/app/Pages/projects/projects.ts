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
      title: "Test d'intégration des API ",
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
      description: "Portfolio sur une interface inspirée d'un éditeur de code",
      points: [
        'Architecture standalone, signals et lazy loading ',
        'Formulaire de contact avec envoi direct (sans back-end)',
      ],
      stacks: ['Angular', 'TypeScript', 'Tailwind CSS'],
      link: { label: 'Voir le code', url: 'https://github.com/the-pek/my-portfolio' },
    },
    {
      kind: 'perso',
      slug: 'pizziea',
      title: 'Pizziea - Optimisation de livraisons',
      context: "Projet d'études · challenge technique",
      description:
        "Application Java / Spring Boot pour un concours d'optimisation de tournées, avec interface temps réel.",
      points: [
        'Conception de 4 stratégies de résolution (dont une recherche exhaustive de paires)',
        "Client d'API REST (WebClient) et UI temps réel (Thymeleaf + WebSocket)",
        'Tests unitaires JUnit / Mockito sur le solveur',
      ],
      stacks: ['Java', 'Spring Boot', 'WebSocket', 'JUnit', 'Mockito'],
      // link: { label: 'Voir le code', url: 'https://github.com/ton-compte/pizziea' },
    },
    {
      kind: 'perso',
      slug: 'festicore',
      title: 'FestiCore',
      context: "Projet d'études · challenge technique",
      description:
        'Un système complet de gestion de festivals en Java pour la gestion des billets, des passes, des activités, des réservations. Le tout en invite de commande',
      points: [
        'Mise en place une architecture orientée objet avec gestion des exceptions personnalisées, persistance JSON et système de logging',
        'Réalisation des tests unitaires sur les modules de réservation et de gestion utilisateurs',
        'Génération de billets en PDF',
      ],
      stacks: ['Java', 'JUnit'],
      link: { label: 'Voir le code', url: 'https://github.com/the-pek/FestiCore' },
    },
    {
      kind: 'perso',
      slug: 'projet-dotnet',
      title: 'Plateforme de cagnotte participative',
      context: 'Projet personnel',
      description: "Développement d'une plateforme de collecte participative",
      points: ["Mise en place d'une architecture n-tiers C#/.NET"],
      stacks: ['C#', '.NET'],
      link: { label: 'Voir le code', url: 'https://github.com/the-pek/Cagnotte_DotNet_Learning' },
    },
    {
      kind: 'perso',
      slug: 'projet c',
      title: 'BigDigitBinary',
      context: "Projet d'études",
      description:
        "Ce projet implémente une bibliothèque en Langage C dédiée à la manipulation d'entiers de précision arbitraire appelés BigBinary.",
      points: [
        'Projet implémenté en 2 phases',
        "Phase 1: établissement de l'infrastructure nécessaire à la manipulation des grands nombres.",
        "Phase 2: implémenter les opérations PGCD, Modulo, Exponentiation en évitant l'uitlisation de la division euclidienne classique",
      ],
      stacks: ['C'],
      link: { label: 'Voir le code', url: 'https://github.com/the-pek/BigDigitBinary' },
    },
  ];

  protected readonly visible = computed(() =>
    this.projects.filter((p) => p.kind === this.active()),
  );
}
