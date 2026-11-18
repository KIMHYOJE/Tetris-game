import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#0d1226", neon: "#69f0d0", violet: "#8b7cff" }, boxShadow: { neon: "0 0 30px rgba(105,240,208,.25)" } } }, plugins: [] };
export default config;
