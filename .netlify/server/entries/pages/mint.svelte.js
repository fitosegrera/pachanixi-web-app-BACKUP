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
  default: () => Mint,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_955b038a = require("../../chunks/index-955b038a.js");
var prismic = __toESM(require("@prismicio/client"));
var prismicH = __toESM(require("@prismicio/helpers"));
var import_Icon_4559c6e1 = require("../../chunks/Icon-4559c6e1.js");
var import_main_e126bb50 = require("../../chunks/main-e126bb50.js");
var heroSection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-b46b2b{overflow:hidden}#wrapper.svelte-b46b2b{z-index:5}")();
const css = {
  code: ".svelte-b46b2b{overflow:hidden}#wrapper.svelte-b46b2b{z-index:5}",
  map: null
};
const Hero_section = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const htmlSerializer = (type, element, content, children) => {
    if (type === "strong") {
      return `<strong class="text-primary-main">${children}</strong>`;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="${"wrapper"}" class="${"w-auto h-auto bg-primary-dark py-160 svelte-b46b2b"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"w-full h-auto svelte-b46b2b"}">
			
			
			<div class="${"flex justify-center items-center space-x-32 text-h3 text-primary-main w-full h-auto text-center pt-32 svelte-b46b2b"}">${(0, import_index_955b038a.v)(import_Icon_4559c6e1.I, "Icon").$$render($$result, { icon: "ci:image-alt" }, {}, {})}
				<h3 class="${"font-bold svelte-b46b2b"}">${(0, import_index_955b038a.b)(data.primary.heading[0].text)}</h3></div>
			<div class="${"w-full h-auto text-center pt-32 svelte-b46b2b"}"><h7 class="${"text-h7 gradient-text-primary-light font-bold svelte-b46b2b"}">${(0, import_index_955b038a.b)(data.primary.subheading_1[0].text)}</h7></div>
			<div class="${"w-full h-auto text-center pt-48 pb-32 svelte-b46b2b"}"><p class="${"text-p2 text-primary-light font-medium svelte-b46b2b"}"><!-- HTML_TAG_START -->${prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}<!-- HTML_TAG_END --></p></div></div>`;
    }
  })}
	<div class="${"flex w-auto justify-center mb-32 svelte-b46b2b"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
    name: "section-1-divider",
    w: "full",
    h: "32",
    pixCol: "#BDFF00"
  }, {}, {})}</div>
	<div class="${"grid grid-cols-3 svelte-b46b2b"}"><div class="${"svelte-b46b2b"}"><video width="${"100%"}" height="${"auto"}" autoplay loop muted class="${"svelte-b46b2b"}"><source src="${"/assets/vids/nft-0.mp4"}" type="${"video/mp4"}" class="${"svelte-b46b2b"}"></video></div>
		<div class="${"svelte-b46b2b"}"><video width="${"100%"}" height="${"auto"}" autoplay loop muted class="${"svelte-b46b2b"}"><source src="${"/assets/vids/nft-1.mp4"}" type="${"video/mp4"}" class="${"svelte-b46b2b"}"></video></div>
		<div class="${"svelte-b46b2b"}"><video width="${"100%"}" height="${"auto"}" autoplay loop muted class="${"svelte-b46b2b"}"><source src="${"/assets/vids/nft-2.mp4"}" type="${"video/mp4"}" class="${"svelte-b46b2b"}"></video></div></div>
</div>`;
});
async function load({ params, fetch, session, stuff }) {
  const endpoint = prismic.getEndpoint("pachanixi");
  const accessToken = "MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew";
  const routes = [
    { type: "mint", path: "/" }
  ];
  const client = prismic.createClient(endpoint, { routes, accessToken });
  const mintData = await client.getSingle("mint");
  return { props: { mintData: mintData.data.body } };
}
const Mint = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { mintData } = $$props;
  if ($$props.mintData === void 0 && $$bindings.mintData && mintData !== void 0)
    $$bindings.mintData(mintData);
  return `${(0, import_index_955b038a.v)(Hero_section, "HeroSection").$$render($$result, { data: mintData[0] }, {}, {})}`;
});
