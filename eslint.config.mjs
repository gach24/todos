import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      // Directorios estándar
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',

      // Archivos de configuración
      'next-env.d.ts',
      '*.config.js',
      '*.config.mjs',

      // Archivos generados
      'src/generated/**',
      'prisma/migrations/**',

      // Directorios de prueba o temporales
      'coverage/**',
      'temp/**',
      '.cache/**',

      // Archivos específicos
      '*.min.js',
      '*.bundle.js',

      // Ejemplo: excluir un directorio específico
      // 'src/legacy/**',
      // 'src/vendor/**',
    ],
  },
];

export default eslintConfig;
