import { config } from "@jeius-portfolio/eslint-config/react";


const eslintConfig = [
  config,
  {
    ignores: ['./tanstack/**', '.devcontainer/**', 'public/**', '.env', '.vscode/**'],
  },
]

export default eslintConfig
