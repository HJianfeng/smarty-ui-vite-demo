(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.SmartyUI = {}, global.Vue));
})(this, function(exports2, vue) {
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
  exports2.Button = Button;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
