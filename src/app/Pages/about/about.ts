import { Component } from '@angular/core';

interface TimelineEntry {
  role: string;
  org: string;
  place: string;
  period: string;
  desc: string;
  stacks?: string[];
  Tools?: string[];
}

interface SkillGroup {
  cat: string;
  items: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly experiences: TimelineEntry[] = [
    {
      period: 'Décembre 2024 – Mars 2025',
      role: 'Développeur Full-Stack',
      org: 'MTN Cameroun',
      place: 'Douala, Cameroun',
      desc:
        "Refonte de l'architecture d'une application Angular/Django",
      stacks: ['Angular', 'TypeScript', 'Django', 'OracleDB', 'Git', 'GitLab'],
    },
    {
      period: 'Avril 2024 - Juin 2024',
      role: 'Développeur Back-End',
      org: 'DIOOL',
      place: 'Douala, Cameroun',
      desc: "Tests d'intégration d'API partenaires",
      Tools: ['Postman', 'Jira', 'Suite Office'],
    },
  ];

  protected readonly formation: TimelineEntry[] = [
    {
      period: "Septembre 2025 - aujourd'hui ",
      role: 'Cycle ingénieur informatique',
      org: 'ESIEA',
      place: 'Ivry-sur-Seine, France',
      desc: "Etudiant en 2ème année cycle ingénieur (4ème année université)",
      stacks: ['Java', 'Python', 'Linux', 'C', 'Git', 'GitLab', 'OracleDB'],
    },
    {
      period: 'Septembre 2022 - Juillet 2025',
      role: 'Cycle ingénierie informatique',
      org: 'Institut UCAC-ICAM',
      place: 'Douala, Cameroun',
      desc: '1ère et 2ème année en 1er cycle (1ère et 2ème année université) ; 1ère année du 2nd cycle (cycle ingénieur - 3ème année université)',
      stacks: ['Python', 'HTML/CSS', 'React', 'Angular', 'Git', 'GitHub'],
    },
  ];

  protected readonly skillGroups: SkillGroup[] = [
    { cat: 'Front-end', items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML / CSS'] },
    { cat: 'Back-end', items: ['Java / Spring Boot', 'Python / Django', 'C# / .NET', 'API REST'] },
    { cat: 'Bases de données', items: ['OracleDB', 'PostgreSQL', 'MySQL', 'MongoDB'] },
    {
      cat: 'Outils & DevOps',
      items: ['Git / GitHub / GitLab', 'Maven', 'Docker (notions)', 'Linux (Notions)'],
    },
  ];
}
