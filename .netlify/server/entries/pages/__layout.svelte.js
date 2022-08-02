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
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_955b038a = require("../../chunks/index-955b038a.js");
var prismic = __toESM(require("@prismicio/client"));
var import_Icon_4559c6e1 = require("../../chunks/Icon-4559c6e1.js");
var import_image_sequence_886dfe57 = require("../../chunks/image-sequence-886dfe57.js");
var app = /* @__PURE__ */ (() => '/*\n! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.left-32 {\n  left: 32px;\n}\n.bottom-4 {\n  bottom: 4px;\n}\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n.float-right {\n  float: right;\n}\n.float-left {\n  float: left;\n}\n.my-32 {\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-48 {\n  margin-top: 48px;\n  margin-bottom: 48px;\n}\n.mx-64 {\n  margin-left: 64px;\n  margin-right: 64px;\n}\n.mt-48 {\n  margin-top: 48px;\n}\n.mt-96 {\n  margin-top: 96px;\n}\n.mb-32 {\n  margin-bottom: 32px;\n}\n.mt-32 {\n  margin-top: 32px;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.mt-64 {\n  margin-top: 64px;\n}\n.mt-160 {\n  margin-top: 160px;\n}\n.mt-88 {\n  margin-top: 88px;\n}\n.mt-72 {\n  margin-top: 72px;\n}\n.mb-160 {\n  margin-bottom: 160px;\n}\n.mt-24 {\n  margin-top: 24px;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-auto {\n  height: auto;\n}\n.h-full {\n  height: 100%;\n}\n.h-72 {\n  height: 72px;\n}\n.h-960 {\n  height: 960px;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-32 {\n  height: 32px;\n}\n.h-96 {\n  height: 96px;\n}\n.h-368 {\n  height: 368px;\n}\n.h-8 {\n  height: 8px;\n}\n.h-340 {\n  height: 340px;\n}\n.w-full {\n  width: 100%;\n}\n.w-auto {\n  width: auto;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-1920 {\n  width: 1920px;\n}\n.w-50 {\n  width: 50%;\n}\n.w-240 {\n  width: 240px;\n}\n.w-296 {\n  width: 296px;\n}\n.w-960 {\n  width: 960px;\n}\n.w-124 {\n  width: 124px;\n}\n.w-420 {\n  width: 420px;\n}\n.w-340 {\n  width: 340px;\n}\n.w-160 {\n  width: 160px;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.space-x-32 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(32px * var(--tw-space-x-reverse));\n  margin-left: calc(32px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-48 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(48px * var(--tw-space-x-reverse));\n  margin-left: calc(48px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-16 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(16px * var(--tw-space-x-reverse));\n  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-64 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(64px * var(--tw-space-x-reverse));\n  margin-left: calc(64px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-72 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(72px * var(--tw-space-x-reverse));\n  margin-left: calc(72px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(8px * var(--tw-space-x-reverse));\n  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));\n}\n.border {\n  border-width: 1px;\n}\n.border-8 {\n  border-width: 8px;\n}\n.border-primary-main {\n  --tw-border-opacity: 1;\n  border-color: rgb(189 255 0 / var(--tw-border-opacity));\n}\n.border-primary-dark {\n  --tw-border-opacity: 1;\n  border-color: rgb(2 35 43 / var(--tw-border-opacity));\n}\n.bg-primary-dark {\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 35 43 / var(--tw-bg-opacity));\n}\n.bg-secondary-main {\n  --tw-bg-opacity: 1;\n  background-color: rgb(126 68 248 / var(--tw-bg-opacity));\n}\n.bg-primary-dark-alpha {\n  background-color: #02232B55;\n}\n.bg-primary-dark-alpha-variant {\n  background-color: #02232BDD;\n}\n.bg-primary-main {\n  --tw-bg-opacity: 1;\n  background-color: rgb(189 255 0 / var(--tw-bg-opacity));\n}\n.bg-primary-dark-variant {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 24 26 / var(--tw-bg-opacity));\n}\n.bg-primary-semi-dark {\n  --tw-bg-opacity: 1;\n  background-color: rgb(56 107 104 / var(--tw-bg-opacity));\n}\n.p-16 {\n  padding: 16px;\n}\n.px-32 {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.py-16 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.px-112 {\n  padding-left: 112px;\n  padding-right: 112px;\n}\n.px-16 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.py-48 {\n  padding-top: 48px;\n  padding-bottom: 48px;\n}\n.py-160 {\n  padding-top: 160px;\n  padding-bottom: 160px;\n}\n.py-32 {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.py-8 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.pt-16 {\n  padding-top: 16px;\n}\n.pt-88 {\n  padding-top: 88px;\n}\n.pt-4 {\n  padding-top: 4px;\n}\n.pr-32 {\n  padding-right: 32px;\n}\n.pt-48 {\n  padding-top: 48px;\n}\n.pl-32 {\n  padding-left: 32px;\n}\n.pb-16 {\n  padding-bottom: 16px;\n}\n.pb-72 {\n  padding-bottom: 72px;\n}\n.pb-32 {\n  padding-bottom: 32px;\n}\n.pb-124 {\n  padding-bottom: 124px;\n}\n.pt-32 {\n  padding-top: 32px;\n}\n.pr-112 {\n  padding-right: 112px;\n}\n.pb-112 {\n  padding-bottom: 112px;\n}\n.pt-24 {\n  padding-top: 24px;\n}\n.pl-16 {\n  padding-left: 16px;\n}\n.pr-16 {\n  padding-right: 16px;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-p2 {\n  font-size: 36px;\n  line-height: 44px;\n}\n.text-h6 {\n  font-size: 64px;\n  line-height: 72px;\n}\n.text-p3 {\n  font-size: 24px;\n  line-height: 32px;\n}\n.text-h5 {\n  font-size: 84px;\n  line-height: 96px;\n}\n.text-p4 {\n  font-size: 16px;\n  line-height: 20px;\n}\n.text-h4 {\n  font-size: 100px;\n  line-height: 112px;\n}\n.text-h2 {\n  font-size: 184px;\n  line-height: 184px;\n}\n.text-p1 {\n  font-size: 44px;\n  line-height: 52px;\n}\n.text-lg {\n  font-size: 36px;\n  line-height: 36px;\n  letter-spacing: 0.1em;\n}\n.text-h1 {\n  font-size: 220px;\n  line-height: 220px;\n}\n.text-h3 {\n  font-size: 124px;\n  line-height: 132px;\n}\n.text-h7 {\n  font-size: 48px;\n  line-height: 48px;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-primary-main {\n  --tw-text-opacity: 1;\n  color: rgb(189 255 0 / var(--tw-text-opacity));\n}\n.text-primary-light {\n  --tw-text-opacity: 1;\n  color: rgb(246 255 250 / var(--tw-text-opacity));\n}\n.text-primary-main-variant {\n  --tw-text-opacity: 1;\n  color: rgb(219 255 115 / var(--tw-text-opacity));\n}\n.text-primary-dark {\n  --tw-text-opacity: 1;\n  color: rgb(2 35 43 / var(--tw-text-opacity));\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-md {\n  --tw-backdrop-blur: blur(12px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-filter {\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.gradient-text-primary-light {\n    background: -webkit-linear-gradient(#BDFF00, #F6FFFA);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n\n.hover\\:bg-primary-main:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(189 255 0 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-primary-dark:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 35 43 / var(--tw-bg-opacity));\n}\n\n.hover\\:text-primary-dark:hover {\n  --tw-text-opacity: 1;\n  color: rgb(2 35 43 / var(--tw-text-opacity));\n}\n\n.hover\\:text-primary-main:hover {\n  --tw-text-opacity: 1;\n  color: rgb(189 255 0 / var(--tw-text-opacity));\n}\n\n.hover\\:text-primary-light:hover {\n  --tw-text-opacity: 1;\n  color: rgb(246 255 250 / var(--tw-text-opacity));\n}')();
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
  return `<div class="${"hover:text-primary-main cursor-pointer"}">${active ? `<a${(0, import_index_955b038a.a)("href", url, 0)} target="${"__blank"}">${(0, import_index_955b038a.v)(import_Icon_4559c6e1.I, "Icon").$$render($$result, { icon }, {}, {})}</a>` : ``}</div>`;
});
var sidebar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".sidebar.svelte-1tqdumj{position:fixed;width:100%;min-height:100vh;z-index:10}")();
const Hamburger = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_955b038a.v)(import_Icon_4559c6e1.I, "Icon").$$render($$result, { icon: "ci:hamburger" }, {}, {})}`;
});
const Logo_static = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex h-110 w-full justify-start"}"><div class="${"flex items-center w-full h-full"}">
		<a href="${"/"}">${(0, import_index_955b038a.v)(import_image_sequence_886dfe57.I, "ImageSequence").$$render($$result, {
    totalFrames: 40,
    name: "logo-seq",
    url: "/assets/vids/logo-seq/",
    imgWidth: 88,
    imgHeight: 94
  }, {}, {})}</a></div></div>`;
});
var navbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#navbar-wrapper.svelte-9uu9lm{z-index:15}")();
const css$1 = {
  code: "#navbar-wrapper.svelte-9uu9lm{z-index:15}",
  map: null
};
const Navbar = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { navBarData } = $$props;
  if ($$props.navBarData === void 0 && $$bindings.navBarData && navBarData !== void 0)
    $$bindings.navBarData(navBarData);
  $$result.css.add(css$1);
  return `<div id="${"navbar-wrapper"}" class="${"fixed grid grid-flow-col grid-cols-3 w-1920 max-w-full h-auto py-16 bg-primary-dark-alpha text-h5 text-primary-light backdrop-blur-md svelte-9uu9lm"}"><div class="${"flex items-center h-110 w-100 justify-start pl-32"}"><div class="${"cursor-pointer"}">
			${(0, import_index_955b038a.v)(Logo_static, "LogoButton").$$render($$result, {}, {}, {})}</div></div>
	<div class="${"flex items-center justify-center h-full w-auto space-x-48"}">${(0, import_index_955b038a.e)(navBarData.social, (item) => {
    return `${(0, import_index_955b038a.v)(Social, "SocialButton").$$render($$result, {
      icon: item.icon,
      name: item.name,
      active: item.active,
      url: item.url.url
    }, {}, {})}`;
  })}</div>
	<div class="${"flex items-center h-full w-auto justify-end pr-32"}"><div class="${"hover:text-primary-main cursor-pointer"}">${(0, import_index_955b038a.v)(Hamburger, "HamburgerButton").$$render($$result, {}, {}, {})}</div></div>
	${``}
</div>`;
});
const Footer = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { footerData } = $$props;
  if ($$props.footerData === void 0 && $$bindings.footerData && footerData !== void 0)
    $$bindings.footerData(footerData);
  return `<div class="${"grid grid-flow-col grid-cols-2 w-1920 max-w-full h-auto py-16 bg-primary-dark-alpha text-h5 text-primary-light backdrop-blur-md"}"><div class="${"flex space-x-48 h-110 w-full justify-start pl-32"}"><div class="${"flex items-center w-full h-full"}"><img src="${"/assets/imgs/logo-horizontal.png"}" alt="${"pachanixi logo"}"></div>
		<div class="${"flex items-center w-full h-full"}"><p class="${"text-p4 font-medium"}">${(0, import_index_955b038a.b)(footerData.copy_right)}</p></div></div>
	<div class="${"flex items-center justify-end px-16 h-full w-auto space-x-48"}">${(0, import_index_955b038a.e)(footerData.social_network, (item) => {
    return `${(0, import_index_955b038a.v)(Social, "SocialButton").$$render($$result, {
      icon: item.social_icon_label,
      name: item.social_nework_label,
      active: item.active,
      url: item.social_network_url.url
    }, {}, {})}`;
  })}</div></div>`;
});
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-1crjef7{font-family:'Chakra Petch', sans-serif;overflow-x:hidden}#page-wrapper.svelte-1crjef7{max-width:1920px;margin:auto}")();
const css = {
  code: ".svelte-1crjef7{font-family:'Chakra Petch', sans-serif;overflow-x:hidden}#page-wrapper.svelte-1crjef7{max-width:1920px;margin:auto}",
  map: null
};
async function load({ params, fetch, session, stuff }) {
  const endpoint = prismic.getEndpoint("pachanixi");
  const accessToken = "MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew";
  const routes = [
    { type: "navbar", path: "/" },
    { type: "footer", path: "/" }
  ];
  const client = prismic.createClient(endpoint, { routes, accessToken });
  const navBarData = await client.getSingle("navbar");
  const footerData = await client.getSingle("footer");
  return {
    props: {
      navBarData: navBarData.data,
      footerData: footerData.data
    }
  };
}
const _layout = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let { navBarData } = $$props;
  let { footerData } = $$props;
  if ($$props.navBarData === void 0 && $$bindings.navBarData && navBarData !== void 0)
    $$bindings.navBarData(navBarData);
  if ($$props.footerData === void 0 && $$bindings.footerData && footerData !== void 0)
    $$bindings.footerData(footerData);
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" class="${"svelte-1crjef7"}" data-svelte="svelte-1cb5m8l"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin class="${"svelte-1crjef7"}" data-svelte="svelte-1cb5m8l"><link href="${"https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"}" rel="${"stylesheet"}" class="${"svelte-1crjef7"}" data-svelte="svelte-1cb5m8l">`, ""}

<div id="${"page-wrapper"}" class="${"h-auto w-auto svelte-1crjef7"}">${(0, import_index_955b038a.v)(Navbar, "NavBar").$$render($$result, { navBarData }, {}, {})}
	${slots.default ? slots.default({}) : ``}
	${(0, import_index_955b038a.v)(Footer, "Footer").$$render($$result, { footerData }, {}, {})}
</div>`;
});