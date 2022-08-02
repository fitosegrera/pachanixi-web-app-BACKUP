var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Demo_experience_blank,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_955b038a = require("../../chunks/index-955b038a.js");
var prismic = __toESM(require("@prismicio/client"));
var import_Icon_4559c6e1 = require("../../chunks/Icon-4559c6e1.js");
var import_helpers = require("@prismicio/helpers");
const Info = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `<div class="${"text-h5 p-16 text-primary-main hover:text-primary-light cursor-pointer w-124"}">${(0, import_index_955b038a.v)(import_Icon_4559c6e1.I, "Icon").$$render($$result, { icon }, {}, {})}</div>`;
});
var heroSection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-1qi2m6h{overflow:hidden}.demo-experience.svelte-1qi2m6h{margin:0;width:100%;height:1920px}.information.svelte-1qi2m6h{position:absolute;left:0;top:0}.info-button.svelte-1qi2m6h{position:absolute;bottom:32px;right:32px}")();
const css = {
  code: ".svelte-1qi2m6h{overflow:hidden}.demo-experience.svelte-1qi2m6h{margin:0;width:100%;height:1920px}.information.svelte-1qi2m6h{position:absolute;left:0;top:0}.info-button.svelte-1qi2m6h{position:absolute;bottom:32px;right:32px}",
  map: null
};
const Hero_section = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"relative bg-primary-dark h-screen svelte-1qi2m6h"}">${`<div class="${"info-button svelte-1qi2m6h"}">${(0, import_index_955b038a.v)(Info, "InfoButton").$$render($$result, { icon: "ci:info-square-outline" }, {}, {})}</div>`}
	<iframe class="${"demo-experience svelte-1qi2m6h"}" src="${"http://50.116.40.214:3333"}" title="${"Pachanixi demo experience"}"></iframe>
</div>`;
});
async function load({ params, fetch, session, stuff }) {
  const endpoint = prismic.getEndpoint("pachanixi");
  const accessToken = "MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew";
  const routes = [
    { type: "demo-experience", path: "/" }
  ];
  const client = prismic.createClient(endpoint, { routes, accessToken });
  const demoExperienceData = await client.getSingle("demo-experience");
  return {
    props: {
      demoExperienceData: demoExperienceData.data.body
    }
  };
}
const Demo_experience_blank = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { demoExperienceData } = $$props;
  if ($$props.demoExperienceData === void 0 && $$bindings.demoExperienceData && demoExperienceData !== void 0)
    $$bindings.demoExperienceData(demoExperienceData);
  return `${(0, import_index_955b038a.v)(Hero_section, "HeroSection").$$render($$result, { data: demoExperienceData[0] }, {}, {})}`;
});
