import { defineComponent, h } from "vue";
const Button = defineComponent({
  name: "SButton",
  render() {
    return h("button", null, "MyButton");
  }
});
const componentList = { Button };
const entry = {
  install(app) {
    for (const key in componentList) {
      const com = componentList[key];
      app.component(com.name, com);
    }
  }
};
export {
  Button,
  entry as default
};
