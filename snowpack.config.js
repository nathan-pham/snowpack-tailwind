module.exports = {
  mount: {},
  plugins: [
    "@snowpack/plugin-postcss"
  ],
  packageOptions: {},
  devOptions: {
    tailwindConfig: "./tailwind.config.js"
  },
  buildOptions: {},
  optimize: {
    bundle: true,
    minify: true
  }
}