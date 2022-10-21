var SmartyUI = function(exports, vue) {
  "use strict";
  const Button = vue.defineComponent({
    name: "SButton",
    render() {
      return vue.h("button", null, "MyButton");
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
  exports.Button = Button;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
