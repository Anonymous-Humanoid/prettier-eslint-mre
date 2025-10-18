import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

/**
 * @link https://typescript-eslint.io/users/configs/
 * @see https://typescript-eslint.io/packages/typescript-eslint#config tseslint.config
 */
const config = defineConfig([
    js.configs.recommended,
    stylistic.configs.recommended
]);

export default config;
