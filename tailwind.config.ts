/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
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

