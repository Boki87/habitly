import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: ["**/*"],
      manifest: {
        name: "Habitly",
        short_name: "Habitly",
        theme_color: "#FFFFFF",
        background_color: "#FFFFFF",
        start_url: "/",
        display: "standalone",
        orientation: "portrait-primary",
        scope: "/",
        icons: [
          {
            src: "assets/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "assets/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
