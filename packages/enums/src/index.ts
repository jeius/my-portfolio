export const Roles = {
  ADMIN: { value: 'ADMIN', label: 'Admin' },
  AUTHENTICATED: { value: 'AUTHENTICATED', label: 'Authenticated' },
  GUEST: { value: 'GUEST', label: 'Guest' },
  EDITOR: { value: 'EDITOR', label: 'Editor' },
} as const;

export type Role = keyof typeof Roles;

export const SkillCategories = {
  FRONTEND: { label: 'Frontend', value: 'FRONTEND' },
  BACKEND: { label: 'Backend', value: 'BACKEND' },
  DEVOPS: { label: 'DevOps', value: 'DEVOPS' },
  NETWORKING: { label: 'Networking & Security', value: 'NETWORKING' },
} as const;

export type SkillCategory = keyof typeof SkillCategories;
