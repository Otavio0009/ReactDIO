import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs.flat?.["jsx-runtime"]?.rules,
      "react/react-in-jsx-scope": "off", // Desnecessário no React 19
    },
  },
  {
    settings: { react: { version: "detect" } },
  },
]);