import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

function virtualEsm() {
  const virtualModuleId = "lastUpdateTime";
  return {
    name: "lastUpdateTime", // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualModuleId) {
        return virtualModuleId;
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        return `export default "${new Date().toLocaleString("zh-CN", {
          timeZone: "Asia/Shanghai",
        })}"`;
      }
    },
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), virtualEsm()],
});
