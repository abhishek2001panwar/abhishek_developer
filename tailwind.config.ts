/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // rest of the code
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: { addBase: (arg: any) => void, theme: (path: string) => any }) {
  const allColors = flattenColorPalette({ colors: theme("colors") });
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flattenColorPalette({ colors }: { colors: any; }) {
  const result: { [key: string]: string } = {};
  for (const [color, shades] of Object.entries(colors)) {
    if (typeof shades === 'object') {
      if (shades) {
        for (const [shade, value] of Object.entries(shades)) {
        result[`${color}-${shade}`] = value as string;
      }
    }  else {
      result[color] = shades as unknown as string;
    }}
  }
  return result;
}

