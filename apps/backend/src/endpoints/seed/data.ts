export const EMAIL = 'pahamajulius@gmail.com';
export const PHONE = '+639457667954';
export const GITHUB_URL = 'https://github.com/jeius';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/julius-pahama';
export const BIO = `I am a Full Stack Developer with 3 years of experience in software development, specializing in React, React Native, and Payload CMS.`;

export const LACTALINK = {
  title: 'Lactalink',
  slug: 'lactalink',
  description: `A mobile platform for breastmilk donations and distribution. Provides a platform for individuals and organizations to connect while ensuring medical approval, safety, and convenience.`,
  githubLink: 'https://github.com/jeius/Lactalink',
  featured: true,
  sortOrder: 1,
};

export const TMS = {
  title: 'TMS',
  slug: 'tms',
  description: `Thesis Management System. A platform for students and staff to manage thesis submissions and defense schedules.`,
  githubLink: 'https://github.com/jeius/TMS',
  featured: true,
  sortOrder: 2,
};

export const FULL_STACK_MOBILE_DEVELOPER = {
  company: 'Mindanao State University Iligan Institute of Technology',
  role: 'Full Stack Mobile Developer',
  startDate: '2025-04-01T00:00:00.000Z',
  endDate: '2026-04-30T00:00:00.000Z',
  isCurrent: false,
  location: 'Iligan City, Lanao del Norte',
  responsibilities: `Developed Lactalink, a React Native Expo app with a Next.js/Payload CMS backend.`,
};

export const INTERN_WEB_DEVELOPER = {
  company: 'Mindanao State University Iligan Institute of Technology',
  role: 'Intern Web Developer',
  startDate: '2024-08-01T00:00:00.000Z',
  endDate: '2024-12-31T00:00:00.000Z',
  isCurrent: false,
  location: 'Iligan City, Lanao del Norte',
  responsibilities: `Thesis Management System. A platform for students and staff to manage thesis submissions and defense schedules.`,
};

export const TECHNICAL_SKILLS = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'Ruby', 'Dart'],
  },
  {
    category: 'Frameworks',
    skills: ['Next.js', 'Expo', 'Node.js', 'Tanstack Start', 'Ruby on Rails', 'Flutter'],
  },
  {
    category: 'Libraries',
    skills: ['React', 'React Native', 'Tailwind CSS', 'Zustand', 'Tanstack Query', 'Drizzle ORM'],
  },
  {
    category: 'Backend & Infrastructure',
    skills: [
      'Payload CMS',
      'PostgreSQL',
      'Supabase',
      'Docker & Compose',
      'Coolify',
      'RESTful APIs',
      'Git',
      'IP Networking',
      'Vercel',
    ],
  },
];

export const LACTALINK_SKILLS = [
  'React',
  'React Native',
  'Next.js',
  'Expo',
  'Tailwind CSS',
  'Payload CMS',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'RESTful APIs',
  'Git',
  'Zustand',
  'Tanstack Query',
];

export const TMS_SKILLS = LACTALINK_SKILLS.filter((s) => !['Expo', 'React Native'].includes(s));
