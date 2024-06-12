import {
  scopedPreflightStyles,
  isolateInsideOfContainer, // there are also isolateOutsideOfContainer and isolateForComponents
} from "tailwindcss-scoped-preflight";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**.vue"],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".scoped"),
    }),
  ],
};
