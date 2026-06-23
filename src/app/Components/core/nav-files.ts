export interface FileTab {
  path: string;
  name: string;
}

export const NAV_FILES: FileTab[] = [
  { path: '/overview', name: 'overview.ts' },
  { path: '/a-propos', name: 'about.ts' },
  { path: '/projects', name: 'projects.ts' },
  { path: '/contact', name: 'contact.ts' },
];
