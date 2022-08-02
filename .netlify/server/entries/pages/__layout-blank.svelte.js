var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout_blank
});
module.exports = __toCommonJS(stdin_exports);
var import_index_955b038a = require("../../chunks/index-955b038a.js");
var __layoutBlank_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-85n3fx{font-family:'Chakra Petch', sans-serif;overflow-x:hidden}")();
const css = {
  code: ".svelte-85n3fx{font-family:'Chakra Petch', sans-serif;overflow-x:hidden}",
  map: null
};
const _layout_blank = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" class="${"svelte-85n3fx"}" data-svelte="svelte-1cb5m8l"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin class="${"svelte-85n3fx"}" data-svelte="svelte-1cb5m8l"><link href="${"https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"}" rel="${"stylesheet"}" class="${"svelte-85n3fx"}" data-svelte="svelte-1cb5m8l">`, ""}

<div class="${"blank w-auto h-auto svelte-85n3fx"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
