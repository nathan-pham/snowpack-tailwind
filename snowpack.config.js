module.exports = {
  mount: {
    src: "/dist",
    public: "/"
  },
  devOptions: {tailwindConfig: "./tailwind.config.js"},
  plugins: ["@snowpack/plugin-postcss"],
  packageOptions: {},
  buildOptions: {},
  optimize: {
    bundle: true,
    minify: true
  }
}