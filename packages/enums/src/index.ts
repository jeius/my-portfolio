export const Roles = {
  ADMIN: { value: 'ADMIN', label: 'Admin' },
  AUTHENTICATED: { value: 'AUTHENTICATED', label: 'Authenticated' },
  GUEST: { value: 'GUEST', label: 'Guest' },
  EDITOR: { value: 'EDITOR', label: 'Editor' },
} as const

export type Role = keyof typeof Roles