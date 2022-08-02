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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_955b038a = require("../../chunks/index-955b038a.js");
var prismic = __toESM(require("@prismicio/client"));
var import_image_sequence_886dfe57 = require("../../chunks/image-sequence-886dfe57.js");
var import_main_e126bb50 = require("../../chunks/main-e126bb50.js");
var import_Icon_4559c6e1 = require("../../chunks/Icon-4559c6e1.js");
const Primary$1 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { url } = $$props;
  let { target } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<a${(0, import_index_955b038a.a)("href", url, 0)}${(0, import_index_955b038a.a)("alt", label, 0)}${(0, import_index_955b038a.a)("target", target, 0)}><div class="${"flex items-center justify-center text-lg text-primary-main font-bold h-96 w-auto border-8 border-primary-main px-32 py-32 hover:text-primary-dark hover:bg-primary-main hover:cursor-pointer"}"><p>${(0, import_index_955b038a.b)(label)}</p></div></a>`;
});
var heroSection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-b8iti4{overflow:hidden}#orb-right-wrapper.svelte-b8iti4{position:absolute;right:140px;top:600px}#orb-left-wrapper.svelte-b8iti4{position:absolute;left:120px;top:800px}")();
const css$7 = {
  code: ".svelte-b8iti4{overflow:hidden}#orb-right-wrapper.svelte-b8iti4{position:absolute;right:140px;top:600px}#orb-left-wrapper.svelte-b8iti4{position:absolute;left:120px;top:800px}",
  map: null
};
const Hero_section = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$7);
  return `<div class="${"w-auto h-auto bg-primary-dark svelte-b8iti4"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"w-full h-auto svelte-b8iti4"}"><div class="${"mt-160 svelte-b8iti4"}"><img${(0, import_index_955b038a.a)("src", data.primary.background_image.url, 0)}${(0, import_index_955b038a.a)("alt", data.primary.background_image.alt, 0)} class="${"w-full svelte-b8iti4"}"></div>
			<div class="${"flex w-full mt-32 items-center justify-center text-primary-light font-bold text-lg svelte-b8iti4"}"><h2 class="${"svelte-b8iti4"}">${(0, import_index_955b038a.b)(data.primary.paragraph[0].text)}</h2></div>
			<div class="${"flex w-auto justify-center mt-88 svelte-b8iti4"}">${(0, import_index_955b038a.v)(Primary$1, "PrimaryButton").$$render($$result, {
        label: data.primary.button_label,
        url: data.primary.button_url,
        target: "__blank"
      }, {}, {})}</div>
			<div class="${"flex w-auto h-auto justify-center mt-64 svelte-b8iti4"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
        totalFrames: 240,
        name: "hero-nft",
        url: "/assets/vids/nft-1-seq/",
        imgWidth: 940,
        imgHeight: 680
      }, {}, {})}</div>
			<div id="${"orb-right-wrapper"}" class="${"w-auto h-auto svelte-b8iti4"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
        totalFrames: 240,
        name: "hero-orb-right",
        url: "/assets/vids/orbitante-2-seq/",
        imgWidth: 240,
        imgHeight: 240
      }, {}, {})}</div>
			<div id="${"orb-left-wrapper"}" class="${"w-auto h-auto svelte-b8iti4"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
        totalFrames: 240,
        name: "hero-orb-left",
        url: "/assets/vids/orbitante-3-seq/",
        imgWidth: 200,
        imgHeight: 200
      }, {}, {})}</div></div>`;
    }
  })}
</div>`;
});
var section1_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#wrapper.svelte-1sxejm{z-index:1}")();
const css$6 = {
  code: "#wrapper.svelte-1sxejm{z-index:1}",
  map: null
};
const Section_1 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$6);
  return `<div id="${"wrapper"}" class="${"w-auto h-auto bg-primary-dark pb-124 text-center svelte-1sxejm"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"text-h5 text-primary-main font-bold"}"><div class="${"flex w-auto justify-center"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
        name: "section-1-divider",
        w: "420",
        h: "32",
        pixCol: "#BDFF00"
      }, {}, {})}</div>
			<h5>${(0, import_index_955b038a.b)(data.primary.title[0].text)}</h5></div>
		<div class="${"text-p1 text-primary-light font-medium pt-48"}"><p>${(0, import_index_955b038a.b)(data.primary.paragraph[0].text)}</p></div>
		<div class="${"flex w-auto justify-center mt-72"}">${(0, import_index_955b038a.v)(Primary$1, "PrimaryButton").$$render($$result, {
        label: data.primary.button_label,
        url: data.primary.button_url,
        target: ""
      }, {}, {})}</div>`;
    }
  })}
</div>`;
});
const Primary = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { url } = $$props;
  let { target } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<a${(0, import_index_955b038a.a)("href", url, 0)}${(0, import_index_955b038a.a)("alt", label, 0)}${(0, import_index_955b038a.a)("target", target, 0)}><div class="${"flex items-center justify-center text-lg text-primary-dark font-bold h-96 w-auto border-8 border-primary-dark px-32 py-32 hover:text-primary-main hover:bg-primary-dark hover:cursor-pointer"}"><p>${(0, import_index_955b038a.b)(label)}</p></div></a>`;
});
var section2_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#nft-wrapper.svelte-zaa3j9{position:absolute;right:-50px;top:-180px;pointer-events:none;mix-blend-mode:normal;z-index:3}#orb-right-wrapper.svelte-zaa3j9{position:absolute;right:200px;top:750px;rotate:60deg;pointer-events:none;z-index:3}#orb-left-wrapper.svelte-zaa3j9{position:absolute;left:200px;top:750px;rotate:60deg;pointer-events:none;z-index:3}")();
const css$5 = {
  code: "#nft-wrapper.svelte-zaa3j9{position:absolute;right:-50px;top:-180px;pointer-events:none;mix-blend-mode:normal;z-index:3}#orb-right-wrapper.svelte-zaa3j9{position:absolute;right:200px;top:750px;rotate:60deg;pointer-events:none;z-index:3}#orb-left-wrapper.svelte-zaa3j9{position:absolute;left:200px;top:750px;rotate:60deg;pointer-events:none;z-index:3}",
  map: null
};
const Section_2 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$5);
  return `<div class="${"relative w-auto h-auto bg-primary-main pt-32 pb-124"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex"}"><div><div class="${"flex w-full justify-start"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
        name: "section-2-divider",
        w: "420",
        h: "32",
        pixCol: "#02232B"
      }, {}, {})}</div>
				<div class="${"flex space-x-32 text-h5 text-primary-dark font-bold items-center"}"><h5>${(0, import_index_955b038a.b)(data.primary.title[0].text)}</h5>
					<p class="${"text-p2 font-bold"}">${(0, import_index_955b038a.b)(data.primary.subtitle_1[0].text)}</p></div>
				<div class="${"w-auto h-auto pt-32 text-h1 font-bold"}"><h1 class="${""}">${(0, import_index_955b038a.b)(data.primary.subtitle_2[0].text)}</h1>
					<h1 class="${""}">${(0, import_index_955b038a.b)(data.primary.subtitle_2[1].text)}</h1></div></div>
			<div id="${"nft-wrapper"}" class="${"w-auto h-auto svelte-zaa3j9"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
        totalFrames: 240,
        name: "section-2-nft",
        url: "/assets/vids/nft-2-seq/",
        imgWidth: 1e3,
        imgHeight: 723
      }, {}, {})}</div></div>
		<div class="${"w-full h-auto pt-32 text-p2 font-medium"}"><p class="${""}">${(0, import_index_955b038a.b)(data.primary.paragraph[0].text)}</p></div>
		<div class="${"flex w-auto justify-center mt-72"}">${(0, import_index_955b038a.v)(Primary, "PrimaryButton").$$render($$result, {
        label: data.primary.button_label,
        url: data.primary.button_url,
        target: ""
      }, {}, {})}</div>
		<div id="${"orb-left-wrapper"}" class="${"w-auto h-auto svelte-zaa3j9"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
        totalFrames: 240,
        name: "section-2-orb-left",
        url: "/assets/vids/orbitante-2-seq/",
        imgWidth: 240,
        imgHeight: 240
      }, {}, {})}</div>
		<div id="${"orb-right-wrapper"}" class="${"w-auto h-auto svelte-zaa3j9"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
        totalFrames: 240,
        name: "section-2-orb-right",
        url: "/assets/vids/orbitante-3-seq/",
        imgWidth: 180,
        imgHeight: 180
      }, {}, {})}</div>`;
    }
  })}
</div>`;
});
const Nft = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-420 h-auto bg-primary-dark-variant mx-64 shadow-xl"}"><div clsas="${"w-full h-368"}"><video width="${"420"}" height="${"368"}" autoplay loop muted><source${(0, import_index_955b038a.a)("src", data.video_path, 0)} type="${"video/mp4"}"></video></div>
	<div class="${"w-full h-8 bg-primary-semi-dark"}"></div>
	<div clsas="${"w-full h-auto"}"><div class="${"h-full float-left"}"><p class="${"text-p3 font-bold text-primary-light text-left pt-24 pl-16"}">${(0, import_index_955b038a.b)(data.nft_project_name)}</p>
			<p class="${"text-p4 font-medium text-primary-light text-left py-8 pl-16"}">${(0, import_index_955b038a.b)(data.nft_id_number)}</p></div>
		<div class="${"h-full float-right"}"><p class="${"text-p3 font-bold text-primary-light text-right pt-24 pr-16"}">Price</p>
			<div class="${"flex items-center space-x-8 w-full h-auto pr-16"}"><img width="${"24px"}"${(0, import_index_955b038a.a)("src", data.crypto_logo.url, 0)} alt="${"cardano logo"}">
				<p class="${"text-p4 font-medium text-primary-light text-center py-8"}">75.00</p></div></div></div></div>`;
});
var scroller_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#scroll-container.svelte-ehg10j{overflow:hidden}#scroll-text.svelte-ehg10j{transform:translateX(100%);-webkit-animation:svelte-ehg10j-scroller-animation 25s linear infinite;animation:svelte-ehg10j-scroller-animation 25s linear infinite}@-webkit-keyframes svelte-ehg10j-scroller-animation{from{-webkit-transform:translateX(100%)}to{-webkit-transform:translateX(-100%)}}@keyframes svelte-ehg10j-scroller-animation{from{transform:translateX(100%)}to{transform:translateX(-100%)}}.bg-blur.svelte-ehg10j{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}")();
const css$4 = {
  code: "#scroll-container.svelte-ehg10j{overflow:hidden}#scroll-text.svelte-ehg10j{transform:translateX(100%);-webkit-animation:svelte-ehg10j-scroller-animation 25s linear infinite;animation:svelte-ehg10j-scroller-animation 25s linear infinite}@-webkit-keyframes svelte-ehg10j-scroller-animation{from{-webkit-transform:translateX(100%)}to{-webkit-transform:translateX(-100%)}}@keyframes svelte-ehg10j-scroller-animation{from{transform:translateX(100%)}to{transform:translateX(-100%)}}.bg-blur.svelte-ehg10j{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}",
  map: null
};
const Scroller = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$4);
  return `<div class="${"bg-blur w-screen flex items-center justify-center text-p2 font-bold text-primary-main h-72 py-16 bg-secondary-main svelte-ehg10j"}"><div id="${"scroll-container"}" class="${"svelte-ehg10j"}"><div id="${"scroll-text"}" class="${"svelte-ehg10j"}"><h1 class="${""}">${(0, import_index_955b038a.b)(data)}</h1></div></div>
</div>`;
});
const Section_3 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-auto h-auto bg-primary-dark text-center"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"text-h5 text-primary-main font-bold"}"><div class="${"flex w-auto justify-center pt-32"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
        name: "section-3-divider",
        w: "960",
        h: "32",
        pixCol: "#BDFF00"
      }, {}, {})}</div>
			<h5>${(0, import_index_955b038a.b)(data.primary.title[0].text)}</h5></div>
		<div class="${"flex justify-center mt-88"}">${(0, import_index_955b038a.e)(data.items, (item, i) => {
        return `${(0, import_index_955b038a.v)(Nft, "NftCard").$$render($$result, { data: item }, {}, {})}`;
      })}</div>
		<div class="${"flex w-auto justify-center mt-72"}">${(0, import_index_955b038a.v)(Primary$1, "PrimaryButton").$$render($$result, {
        label: data.primary.button_label,
        url: data.primary.button_url,
        target: ""
      }, {}, {})}</div>`;
    }
  })}
	<div class="${"w-full h-auto mt-72"}">${(0, import_index_955b038a.v)(Scroller, "Scroller").$$render($$result, { data: data.primary.scroller[0].text }, {}, {})}</div></div>`;
});
var section4_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#bg-img.svelte-18u52vb{background-position:right;background-repeat:no-repeat;background-size:115%}")();
const css$3 = {
  code: "#bg-img.svelte-18u52vb{background-position:right;background-repeat:no-repeat;background-size:115%}",
  map: null
};
const Section_4 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  return `<div id="${"bg-img"}" class="${"w-auto h-auto bg-primary-dark pt-32 pb-124 svelte-18u52vb"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"w-full h-auto text-right px-112 text-h5 text-primary-main font-bold"}"><div class="${"flex w-full h-32 justify-end"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
        name: "section-4-divider",
        w: "420",
        h: "32",
        pixCol: "#BDFF00"
      }, {}, {})}</div>
			<h5>${(0, import_index_955b038a.b)(data.primary.title[0].text)}</h5></div>
		<div class="${"flex w-full h-auto space-x-32 my-48 justify-end px-112 text-h5 text-primary-main-variant"}">${(0, import_index_955b038a.v)(import_Icon_4559c6e1.I, "Icon").$$render($$result, { icon: data.primary.icon_1_label }, {}, {})}
			${(0, import_index_955b038a.v)(import_Icon_4559c6e1.I, "Icon").$$render($$result, { icon: data.primary.icon_2_label }, {}, {})}</div>
		<div class="${"flex w-full h-auto items-center justify-end mb-160"}"><div class="${"pr-112 w-960 text-p2 font-medium text-primary-light text-right"}"><p>${(0, import_index_955b038a.b)(data.primary.paragraph[0].text)}</p></div></div>
		<div class="${"flex w-auto justify-center mt-72"}">${(0, import_index_955b038a.v)(Primary$1, "PrimaryButton").$$render($$result, {
        label: data.primary.button_label,
        url: data.primary.button_url,
        target: "__blank"
      }, {}, {})}</div>`;
    }
  })}
</div>`;
});
var profile_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".profile-wrapper.svelte-sj8flm{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100}.close-button-wrapper.svelte-sj8flm{position:absolute;top:0;right:0}.img-wrapper.svelte-sj8flm{width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover}.bio-wrapper.svelte-sj8flm{overflow-y:scroll;width:100%;height:360px}.svelte-sj8flm::-webkit-scrollbar{width:20px}.svelte-sj8flm::-webkit-scrollbar-track{background:#02232b;border-radius:0px}.svelte-sj8flm::-webkit-scrollbar-thumb{background:#bdff00;border-radius:0px}.svelte-sj8flm::-webkit-scrollbar-thumb:hover{background:#f6fffa}")();
var team_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".image-cropper.svelte-1qu1dfp{position:relative;overflow:hidden;border-radius:50%}img.svelte-1qu1dfp{margin:0 auto;height:auto;width:auto}")();
const css$2 = {
  code: ".image-cropper.svelte-1qu1dfp{position:relative;overflow:hidden;border-radius:50%}img.svelte-1qu1dfp{margin:0 auto;height:auto;width:auto}",
  map: null
};
const Team = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  return `<div class="${"w-420 h-auto bg-transparent"}"><div class="${"image-cropper w-340 h-340 mx-auto svelte-1qu1dfp"}"><img${(0, import_index_955b038a.a)("src", data.profile_picture.url, 0)} alt="${""}" class="${"svelte-1qu1dfp"}"></div>
	<div class="${"w-full h-auto"}"><div class="${"h-full text-center"}"><p class="${"text-p1 font-bold text-primary-main mt-32"}">${(0, import_index_955b038a.b)(data.name[0].text)}</p>
			<p class="${"text-p3 font-medium text-primary-light pt-4"}">${(0, import_index_955b038a.b)(data.rol[0].text)}</p></div>

		<div class="${"w-160 h-auto p-16 text-primary-main hover:bg-primary-main hover:text-primary-dark mt-24 mx-auto cursor-pointer"}"><p class="${"text-p3 font-bold"}">${(0, import_index_955b038a.b)(data.button_label)}</p></div></div>
	${``}
</div>`;
});
const Section_5 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"relative w-auto h-auto bg-primary-dark text-center pb-112"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"text-h5 text-primary-main font-bold"}"><div class="${"flex w-auto justify-center pt-32"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
        name: "section-5-divider",
        w: "420",
        h: "32",
        pixCol: "#BDFF00"
      }, {}, {})}</div>
			<h5>${(0, import_index_955b038a.b)(data.primary.title[0].text)}</h5></div>
		<div class="${"flex justify-center mt-88 space-x-72"}">${(0, import_index_955b038a.e)(data.items, (item, i) => {
        return `${(0, import_index_955b038a.v)(Team, "TeamCard").$$render($$result, { data: item }, {}, {})}`;
      })}</div>`;
    }
  })}</div>`;
});
const Social = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { icon, url, name, active } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<div class="${"hover:text-primary-light cursor-pointer"}">${active ? `<a${(0, import_index_955b038a.a)("href", url, 0)} target="${"__blank"}">${(0, import_index_955b038a.v)(import_Icon_4559c6e1.I, "Icon").$$render($$result, { icon }, {}, {})}</a>` : ``}</div>`;
});
var section6_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#orb-left-wrapper.svelte-tlxa3y{left:100px;position:absolute;top:300px;z-index:4}#orb-right-wrapper.svelte-tlxa3y{position:absolute;right:100px;top:-100px;rotate:0deg;z-index:4}")();
const css$1 = {
  code: "#orb-left-wrapper.svelte-tlxa3y{left:100px;position:absolute;top:300px;z-index:4}#orb-right-wrapper.svelte-tlxa3y{position:absolute;right:100px;top:-100px;rotate:0deg;z-index:4}",
  map: null
};
const Section_6 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="${"relative w-auto h-auto bg-primary-main pt-48 pb-124 text-center"}">${(0, import_index_955b038a.v)(import_main_e126bb50.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"text-h5 text-primary-dark font-bold"}"><div class="${"flex w-full justify-center"}">${(0, import_index_955b038a.v)(import_main_e126bb50.D, "Divider").$$render($$result, {
        name: "section-6-divider",
        w: "420",
        h: "32",
        pixCol: "#02232B"
      }, {}, {})}</div>
			<h5>${(0, import_index_955b038a.b)(data.primary.title[0].text)}</h5></div>
		<div class="${"flex justify-center w-full h-auto"}"><div class="${"w-960 h-auto pt-32 text-p2 font-medium"}"><p class="${""}">${(0, import_index_955b038a.b)(data.primary.paragraph[0].text)}</p></div></div>
		<div class="${"flex items-center text-h3 text-primary-dark justify-center h-full w-auto space-x-48 py-48"}">${(0, import_index_955b038a.e)(data.items, (item) => {
        return `${(0, import_index_955b038a.v)(Social, "SocialButton").$$render($$result, {
          icon: item.social_icon_label,
          name: item.social,
          active: item.active,
          url: item.social_network_url.url
        }, {}, {})}`;
      })}</div>
		<div id="${"orb-left-wrapper"}" class="${"w-auto h-auto svelte-tlxa3y"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
        totalFrames: 240,
        name: "section-5-orb-bottom",
        url: "/assets/vids/orbitante-3-seq/",
        imgWidth: 200,
        imgHeight: 200
      }, {}, {})}</div>
		<div id="${"orb-right-wrapper"}" class="${"w-auto h-auto svelte-tlxa3y"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
        totalFrames: 240,
        name: "section-5-orb-right",
        url: "/assets/vids/orbitante-2-seq/",
        imgWidth: 320,
        imgHeight: 320
      }, {}, {})}</div>`;
    }
  })}
</div>`;
});
const P5 = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { target = void 0 } = $$props;
  let { sketch = void 0 } = $$props;
  let { parentDivStyle = "display: block;" } = $$props;
  let { debug = false } = $$props;
  (0, import_index_955b038a.g)();
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.sketch === void 0 && $$bindings.sketch && sketch !== void 0)
    $$bindings.sketch(sketch);
  if ($$props.parentDivStyle === void 0 && $$bindings.parentDivStyle && parentDivStyle !== void 0)
    $$bindings.parentDivStyle(parentDivStyle);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  return `<div${(0, import_index_955b038a.a)("style", parentDivStyle, 0)} class="${"m-0"}"></div>`;
});
const Page_loader = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { w, h } = $$props;
  let { cols, rows } = $$props;
  let { foreground, background } = $$props;
  let { threshold } = $$props;
  const sketch = (p5) => {
    let cellSize = w / cols;
    let matrix;
    p5.setup = () => {
      p5.createCanvas(w, h);
      p5.rectMode(p5.CENTER);
      p5.noStroke();
      matrix = new Array(rows);
      for (let y = 0; y < rows; y++) {
        matrix[y] = new Array(cols);
        for (let x = 0; x < cols; x++) {
          let r = p5.random();
          if (r > threshold) {
            matrix[y][x] = 1;
          } else {
            matrix[y][x] = 0;
          }
        }
      }
    };
    p5.draw = () => {
      p5.background(background);
      randomMatrix();
    };
    const randomMatrix = () => {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let r = p5.random();
          if (r > 0.95) {
            p5.fill(foreground);
          } else {
            p5.fill(background);
          }
          p5.rect(cellSize * x, cellSize * y, cellSize, cellSize);
        }
      }
    };
  };
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  if ($$props.h === void 0 && $$bindings.h && h !== void 0)
    $$bindings.h(h);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.foreground === void 0 && $$bindings.foreground && foreground !== void 0)
    $$bindings.foreground(foreground);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  return `${(0, import_index_955b038a.v)(P5, "P5").$$render($$result, { sketch }, {}, {})}`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#asset-loader.svelte-khkoik{position:fixed;top:0;left:0;z-index:100;opacity:0.98}")();
const css = {
  code: "#asset-loader.svelte-khkoik{position:fixed;top:0;left:0;z-index:100;opacity:0.98}",
  map: null
};
async function load({ params, fetch, session, stuff }) {
  const endpoint = prismic.getEndpoint("pachanixi");
  const accessToken = "MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew";
  const routes = [
    { type: "home", path: "/" }
  ];
  const client = prismic.createClient(endpoint, { routes, accessToken });
  const homepageData = await client.getSingle("home");
  return {
    props: { homepageData: homepageData.data.body }
  };
}
const Routes = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let $img_seq_loading, $$unsubscribe_img_seq_loading;
  $$unsubscribe_img_seq_loading = (0, import_index_955b038a.i)(import_image_sequence_886dfe57.i, (value) => $img_seq_loading = value);
  let { homepageData } = $$props;
  if ($$props.homepageData === void 0 && $$bindings.homepageData && homepageData !== void 0)
    $$bindings.homepageData(homepageData);
  $$result.css.add(css);
  $$unsubscribe_img_seq_loading();
  return `${$img_seq_loading < 9 ? `<div id="${"asset-loader"}" class="${"flex items-center justify-center bg-primary-dark w-full h-full svelte-khkoik"}"><div><h1 class="${"text-p2 font-medium text-primary-main text-center"}">ASSETS LOADED: ${(0, import_index_955b038a.b)($img_seq_loading)}/9
			</h1>
			${(0, import_index_955b038a.v)(Page_loader, "PageLoader").$$render($$result, {
    w: 460,
    h: 16,
    foreground: "#BDFF00",
    background: "#02232B",
    cols: 60,
    rows: 20,
    threshold: 0.96
  }, {}, {})}</div></div>` : ``}
${(0, import_index_955b038a.v)(Hero_section, "HeroSection").$$render($$result, { data: homepageData[0] }, {}, {})}
${(0, import_index_955b038a.v)(Section_1, "Section1").$$render($$result, { data: homepageData[1] }, {}, {})}
${(0, import_index_955b038a.v)(Section_2, "Section2").$$render($$result, { data: homepageData[2] }, {}, {})}
${(0, import_index_955b038a.v)(Section_3, "Section3").$$render($$result, { data: homepageData[3] }, {}, {})}
${(0, import_index_955b038a.v)(Section_4, "Section4").$$render($$result, { data: homepageData[4] }, {}, {})}
${(0, import_index_955b038a.v)(Section_5, "Section5").$$render($$result, { data: homepageData[5] }, {}, {})}
${(0, import_index_955b038a.v)(Section_6, "Section6").$$render($$result, { data: homepageData[6] }, {}, {})}`;
});
