export interface FileTab {
  path: string;
  name: string;
}

export const NAV_FILES: FileTab[] = [
  { path: '/a-propos', name: 'about.ts' },
  { path: '/overview', name: 'overview.ts' },
  { path: '/projets', name: 'projects.ts' },
  { path: '/contact', name: 'contact.ts' },
];
