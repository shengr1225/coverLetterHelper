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
var test_exports = {};
__export(test_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(test_exports);
var import_map = __toESM(require("@babel/runtime-corejs3/core-js/map"));
var import_stringify = __toESM(require("@babel/runtime-corejs3/core-js/json/stringify"));
var import_logger = require("../../lib/logger");
var import_store = require("@redwoodjs/context/dist/store");
const __rw_handler = async (event, _context) => {
  import_logger.logger.info(`${event.httpMethod} ${event.path}: test function`);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: (0, import_stringify.default)({
      data: "test function"
    })
  };
};
const handler = async (__rw_event, __rw__context) => {
  const __rw_contextStore = (0, import_store.getAsyncStoreInstance)().getStore();
  if (__rw_contextStore === void 0) {
    return (0, import_store.getAsyncStoreInstance)().run(new import_map.default(), __rw_handler, __rw_event, __rw__context);
  }
  return __rw_handler(__rw_event, __rw__context);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=test.js.map
