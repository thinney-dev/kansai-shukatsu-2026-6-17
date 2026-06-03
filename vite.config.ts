import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    // 127.0.0.1 を明示することで macOS の localhost(IPv6) 解決遅延を回避
    host: "127.0.0.1",
    port: 8080,
    strictPort: true,
  },
  plugins: [
    react(),
    // Lovable サンドボックス以外では不要なため、ローカル dev では読み込まない
    process.env.LOVABLE_DEV_SERVER === "true" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
