import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three") || id.includes("three-stdlib") || id.includes("@react-three/rapier") || id.includes("@react-three/drei") || id.includes("cannon")) {
              return "three-bundle";
            }
            if (id.includes("gsap") || id.includes("@gsap")) {
              return "animation-bundle";
            }
            if (id.includes("react") || id.includes("react-dom") || id.includes("lenis") || id.includes("scheduler")) {
              return "vendor-bundle";
            }
            return "utils-bundle";
          }
        },
      },
    },
  },
});
