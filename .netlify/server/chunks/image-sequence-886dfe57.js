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
  I: () => Image_sequence,
  i: () => img_seq_loading
});
module.exports = __toCommonJS(stdin_exports);
var import_index_955b038a = require("./index-955b038a.js");
const subscriber_queue = [];
function writable(value, start = import_index_955b038a.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_955b038a.h)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_955b038a.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_955b038a.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const img_seq_loading = writable(0);
const Image_sequence = (0, import_index_955b038a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_img_seq_loading;
  $$unsubscribe_img_seq_loading = (0, import_index_955b038a.i)(img_seq_loading, (value) => value);
  let { url } = $$props;
  let { name } = $$props;
  let { imgWidth, imgHeight } = $$props;
  let { totalFrames } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.imgWidth === void 0 && $$bindings.imgWidth && imgWidth !== void 0)
    $$bindings.imgWidth(imgWidth);
  if ($$props.imgHeight === void 0 && $$bindings.imgHeight && imgHeight !== void 0)
    $$bindings.imgHeight(imgHeight);
  if ($$props.totalFrames === void 0 && $$bindings.totalFrames && totalFrames !== void 0)
    $$bindings.totalFrames(totalFrames);
  $$unsubscribe_img_seq_loading();
  return `<div class="${"animation-wrapper"}"><div class="${"canvas-wrapper"}"><canvas class="${"w-auto h-auto"}"${(0, import_index_955b038a.a)("id", name, 0)}${(0, import_index_955b038a.a)("width", imgWidth, 0)}${(0, import_index_955b038a.a)("height", imgHeight, 0)}></canvas></div>
</div>`;
});
