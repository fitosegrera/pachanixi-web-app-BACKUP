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
  default: () => Cosmovision,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_955b038a = require("../../chunks/index-955b038a.js");
var prismic = __toESM(require("@prismicio/client"));
var import_main_e126bb50 = require("../../chunks/main-e126bb50.js");
var prismicH = __toESM(require("@prismicio/helpers"));
var import_image_sequence_886dfe57 = require("../../chunks/image-sequence-886dfe57.js");
var primaryHeroSection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-1tigsx0{overflow:hidden}video.svelte-1tigsx0{position:absolute;top:50%;left:50%;z-index:-100;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%, -50%)}.text-wrapper.svelte-1tigsx0{position:absolute;top:0;left:0;z-index:10}")();
const css$3 = {
  code: ".svelte-1tigsx0{overflow:hidden}video.svelte-1tigsx0{position:absolute;top:50%;left:50%;z-index:-100;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%, -50%)}.text-wrapper.svelte-1tigsx0{position:absolute;top:0;left:0;z-index:10}",
  map: null
};
const Primary_hero_section = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let splittedTitle = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  return `<div class="${"relative w-full h-960 svelte-1tigsx0"}"><div class="${"text-wrapper w-full h-full pb-16 svelte-1tigsx0"}"><div class="${"relative w-full h-full svelte-1tigsx0"}">
			<div class="${"absolute left-32 bottom-4 text-primary-main text-h2 font-bold svelte-1tigsx0"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
    name: "section-cosmovision-1-divider",
    w: "420",
    h: "32",
    pixCol: "#BDFF00"
  }, {}, {})}
				${(0, import_index_955b038a.e)(splittedTitle, (word) => {
    return `<h2 class="${"svelte-1tigsx0"}">${(0, import_index_955b038a.b)(word)}</h2>`;
  })}</div></div></div>
	<div class="${"video-wrapper w-full h-960 svelte-1tigsx0"}"><video autoplay autobuffer loop muted class="${"svelte-1tigsx0"}"><source src="${"/assets/vids/story-hero.webm"}" type="${"video/webm"}" class="${"svelte-1tigsx0"}"></video></div>
</div>`;
});
var section1_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#wrapper.svelte-1qbye6b{z-index:1}.gradient-dark.svelte-1qbye6b{background-image:linear-gradient(180deg, #000000, 20%, #000000)}")();
const css$2 = {
  code: "#wrapper.svelte-1qbye6b{z-index:1}.gradient-dark.svelte-1qbye6b{background-image:linear-gradient(180deg, #000000, 20%, #000000)}",
  map: null
};
const Section_1 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const htmlSerializer = (type, element, content, children) => {
    if (type === "strong") {
      return `<strong class="text-primary-main">${children}</strong>`;
    }
    if (type === "paragraph") {
      return `<p class="text-primary-light pb-32">${children}</p>`;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  return `<div id="${"wrapper"}" class="${"w-auto h-auto gradient-dark text-left svelte-1qbye6b"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"text-p1 text-primary-light font-medium pt-48"}"><p><!-- HTML_TAG_START -->${prismicH.asHTML(data.primary.cosmovision_1, null, htmlSerializer)}<!-- HTML_TAG_END --></p></div>`;
    }
  })}
</div>`;
});
var secondaryHeroSection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-1qdy4s6{overflow:hidden}video.svelte-1qdy4s6{position:absolute;top:50%;left:50%;z-index:-100;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%, -50%)}.text-wrapper.svelte-1qdy4s6{position:absolute;top:0;left:0;z-index:10}#orb-left-wrapper.svelte-1qdy4s6{position:absolute;left:45%;top:0px}")();
const css$1 = {
  code: ".svelte-1qdy4s6{overflow:hidden}video.svelte-1qdy4s6{position:absolute;top:50%;left:50%;z-index:-100;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%, -50%)}.text-wrapper.svelte-1qdy4s6{position:absolute;top:0;left:0;z-index:10}#orb-left-wrapper.svelte-1qdy4s6{position:absolute;left:45%;top:0px}",
  map: null
};
const Secondary_hero_section = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let splittedTitle = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="${"relative w-full h-960 svelte-1qdy4s6"}"><div class="${"text-wrapper w-full h-full pb-72 svelte-1qdy4s6"}"><div class="${"relative w-full h-full svelte-1qdy4s6"}"><div id="${"orb-left-wrapper"}" class="${"w-auto h-auto svelte-1qdy4s6"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
    totalFrames: 240,
    name: "cosmovision-1-hero-nft",
    url: "/assets/vids/orbitante-3-seq/",
    imgWidth: 200,
    imgHeight: 200
  }, {}, {})}</div>
			<div class="${"absolute left-32 bottom-4 text-primary-main text-h2 font-bold svelte-1qdy4s6"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
    name: "section-cosmovision-2-divider",
    w: "420",
    h: "32",
    pixCol: "#BDFF00"
  }, {}, {})}
				${(0, import_index_955b038a.e)(splittedTitle, (word) => {
    return `<h2 class="${"svelte-1qdy4s6"}">${(0, import_index_955b038a.b)(word)}</h2>`;
  })}</div></div></div>
	<div class="${"video-wrapper w-full h-960 svelte-1qdy4s6"}"><video autoplay autobuffer loop muted class="${"svelte-1qdy4s6"}"><source src="${"/assets/vids/story-hero.webm"}" type="${"video/webm"}" class="${"svelte-1qdy4s6"}"></video></div>
</div>`;
});
var section2_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#wrapper.svelte-1i8af7z{z-index:1}.gradient-dark.svelte-1i8af7z{background-image:linear-gradient(180deg, #000000, 20%, #0a232b)}")();
const css = {
  code: "#wrapper.svelte-1i8af7z{z-index:1}.gradient-dark.svelte-1i8af7z{background-image:linear-gradient(180deg, #000000, 20%, #0a232b)}",
  map: null
};
const Section_2 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const htmlSerializer = (type, element, content, children) => {
    if (type === "strong") {
      return `<strong class="text-primary-main">${children}</strong>`;
    }
    if (type === "paragraph") {
      return `<p class="text-primary-light pb-32">${children}</p>`;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="${"wrapper"}" class="${"w-auto h-auto gradient-dark pb-32 text-left svelte-1i8af7z"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"text-p1 text-primary-light font-medium pt-48"}"><p class="${"my-32"}"><!-- HTML_TAG_START -->${prismicH.asHTML(data.primary.cosmovision_2, null, htmlSerializer)}<!-- HTML_TAG_END --></p></div>`;
    }
  })}
</div>`;
});
async function load({ params, fetch, session, stuff }) {
  const endpoint = prismic.getEndpoint("pachanixi");
  const accessToken = "MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew";
  const routes = [
    { type: "cosmovision", path: "/" }
  ];
  const client = prismic.createClient(endpoint, { routes, accessToken });
  const cosmovisionData = await client.getSingle("cosmovision");
  console.log(cosmovisionData.data.body);
  return {
    props: {
      cosmovisionData: cosmovisionData.data.body
    }
  };
}
const Cosmovision = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { cosmovisionData } = $$props;
  if ($$props.cosmovisionData === void 0 && $$bindings.cosmovisionData && cosmovisionData !== void 0)
    $$bindings.cosmovisionData(cosmovisionData);
  return `${(0, import_index_955b038a.v)(Primary_hero_section, "PrimaryHeroSection").$$render($$result, { data: cosmovisionData[0] }, {}, {})}
${(0, import_index_955b038a.v)(Section_1, "Section_1").$$render($$result, { data: cosmovisionData[1] }, {}, {})}
${(0, import_index_955b038a.v)(Secondary_hero_section, "SecondaryHeroSection").$$render($$result, { data: cosmovisionData[2] }, {}, {})}
${(0, import_index_955b038a.v)(Section_2, "Section_2").$$render($$result, { data: cosmovisionData[3] }, {}, {})}`;
});
