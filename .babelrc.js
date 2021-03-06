module.exports = {
  presets: [
    "@babel/env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/proposal-class-properties",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
        helpers: true,
      },
    ],
  ],
};
