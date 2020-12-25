// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  // https://github.com/tailwindlabs/tailwindcss-forms
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
