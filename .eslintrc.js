module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  ignorePatterns: [".eslintrc.js", "**/dist/*.js", "vite.config.js", "/server/server.js"],
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    //TODO: enable rules
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-in-jsx-scope": "off",
    "react/jsx-key": "warn",
    "no-mixed-spaces-and-tabs": "off",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
  },
};
