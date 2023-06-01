import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.jsx",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
  ],
};
