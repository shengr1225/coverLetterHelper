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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var realtime_exports = {};
__export(realtime_exports, {
  realtime: () => realtime
});
module.exports = __toCommonJS(realtime_exports);
var subscriptions_countdown_countdown = __toESM(require("../subscriptions/countdown/countdown"));
var subscriptions_newMessage_newMessage = __toESM(require("../subscriptions/newMessage/newMessage"));
let subscriptions = {};
subscriptions.countdown_countdown = subscriptions_countdown_countdown;
subscriptions.newMessage_newMessage = subscriptions_newMessage_newMessage;
const realtime = {
  subscriptions: {
    subscriptions,
    store: "in-memory"
    // if using a Redis store
    // store: { redis: { publishClient, subscribeClient } },
  },
  liveQueries: {
    store: "in-memory"
    // if using a Redis store
    // store: { redis: { publishClient, subscribeClient } },
  },
  // To enable defer and streaming, set to true.
  enableDeferStream: true
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  realtime
});
//# sourceMappingURL=realtime.js.map
