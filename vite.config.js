import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  
server: {
    allowedHosts: [
      'dps-gha-workshop2-a6hedab9b8dmdvh4.centralus-01.azurewebsites.net'
    ]
  }

})
