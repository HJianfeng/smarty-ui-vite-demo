import { App } from "vue";
import { Button } from "./components/Button";

const componentList = { Button };

// 导出单独组件
export { Button };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    for (const key in componentList) {
      const com = componentList[key];
      app.component(com.name, com);
    }
  },
};