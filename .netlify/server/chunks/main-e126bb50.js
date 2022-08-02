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
  D: () => Divider,
  M: () => Main
});
module.exports = __toCommonJS(stdin_exports);
var import_index_955b038a = require("./index-955b038a.js");
const Divider = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { name, w, h, pixCol } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  if ($$props.h === void 0 && $$bindings.h && h !== void 0)
    $$bindings.h(h);
  if ($$props.pixCol === void 0 && $$bindings.pixCol && pixCol !== void 0)
    $$bindings.pixCol(pixCol);
  return `<div${(0, import_index_955b038a.a)("id", name, 0)}${(0, import_index_955b038a.a)("class", `w-${w} h-${h}`, 0)}></div>`;
});
const Main = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-auto px-32"}">${slots.default ? slots.default({}) : ``}</div>`;
});
