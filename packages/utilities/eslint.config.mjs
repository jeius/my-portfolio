import { config } from '@jeius-portfolio/eslint-config';

export default [
  {
    ignores: [
      '**/node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'packages/**/node_modules/**',
    ],
  },
  ...config,
];
