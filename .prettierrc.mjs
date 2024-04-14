/** @type {import("prettier").Config} */

export default {
  printWidth: 100,
  semi: false,
  arrowParens: "avoid",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro-organize-imports",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
