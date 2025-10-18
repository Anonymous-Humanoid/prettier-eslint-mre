import js from '@eslint/js';
import tseslint from 'typescript-eslint';

/**
 * @link https://typescript-eslint.io/users/configs/
 * @see https://typescript-eslint.io/packages/typescript-eslint#config tseslint.config
 */
const config = tseslint.config([
    js.configs.recommended
]);

export default config;
