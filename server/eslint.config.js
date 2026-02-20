export default [
  {
    files: ["server/**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
  },
];