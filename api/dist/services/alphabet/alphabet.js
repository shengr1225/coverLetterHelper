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
var alphabet_exports = {};
__export(alphabet_exports, {
  alphabet: () => alphabet
});
module.exports = __toCommonJS(alphabet_exports);
var import_set_interval = __toESM(require("@babel/runtime-corejs3/core-js/set-interval"));
var import_realtime = require("@redwoodjs/realtime");
var import_logger = require("../../lib/logger");
const alphabet = async () => {
  return new import_realtime.Repeater(async (push, stop) => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const publish = () => {
      const letter = letters.shift();
      if (letter) {
        import_logger.logger.debug({
          letter
        }, "publishing letter...");
        push(letter);
      }
      if (letters.length === 0) {
        stop();
      }
    };
    const interval = (0, import_set_interval.default)(publish, 1e3);
    stop.then(() => {
      import_logger.logger.debug("cancel");
      clearInterval(interval);
    });
    publish();
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alphabet
});
//# sourceMappingURL=alphabet.js.map
