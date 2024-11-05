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
var graphql_exports = {};
__export(graphql_exports, {
  __rw_graphqlOptions: () => __rw_graphqlOptions,
  handler: () => handler
});
module.exports = __toCommonJS(graphql_exports);
var import_map = __toESM(require("@babel/runtime-corejs3/core-js/map"));
var import_graphql_server = require("@redwoodjs/graphql-server");
var directives_requireAuth_requireAuth = __toESM(require("../directives/requireAuth/requireAuth"));
var directives_skipAuth_skipAuth = __toESM(require("../directives/skipAuth/skipAuth"));
var sdls_alphabet_sdl = __toESM(require("../graphql/alphabet.sdl"));
var sdls_auctions_sdl = __toESM(require("../graphql/auctions.sdl"));
var sdls_completions_sdl = __toESM(require("../graphql/completions.sdl"));
var sdls_fastAndSlowFields_sdl = __toESM(require("../graphql/fastAndSlowFields.sdl"));
var sdls_rooms_sdl = __toESM(require("../graphql/rooms.sdl"));
var services_alphabet_alphabet = __toESM(require("../services/alphabet/alphabet"));
var services_auctions_auctions = __toESM(require("../services/auctions/auctions"));
var services_completions_completions = __toESM(require("../services/completions/completions"));
var services_fastAndSlowFields_fastAndSlowFields = __toESM(require("../services/fastAndSlowFields/fastAndSlowFields"));
var services_rooms_rooms = __toESM(require("../services/rooms/rooms"));
var import_db = require("../lib/db");
var import_logger = require("../lib/logger");
var import_realtime = require("../lib/realtime");
var import_store = require("@redwoodjs/context/dist/store");
let directives = {};
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
sdls.alphabet_sdl = sdls_alphabet_sdl;
sdls.auctions_sdl = sdls_auctions_sdl;
sdls.completions_sdl = sdls_completions_sdl;
sdls.fastAndSlowFields_sdl = sdls_fastAndSlowFields_sdl;
sdls.rooms_sdl = sdls_rooms_sdl;
let services = {};
services.alphabet_alphabet = services_alphabet_alphabet;
services.auctions_auctions = services_auctions_auctions;
services.completions_completions = services_completions_completions;
services.fastAndSlowFields_fastAndSlowFields = services_fastAndSlowFields_fastAndSlowFields;
services.rooms_rooms = services_rooms_rooms;
const __rw_graphqlOptions = {
  loggerConfig: {
    logger: import_logger.logger,
    options: {}
  },
  directives,
  sdls,
  services,
  realtime: import_realtime.realtime,
  onException: () => {
    import_db.db.$disconnect();
  }
};
const __rw_handler = (0, import_graphql_server.createGraphQLHandler)(__rw_graphqlOptions);
const handler = (__rw_event, __rw__context) => {
  const __rw_contextStore = (0, import_store.getAsyncStoreInstance)().getStore();
  if (__rw_contextStore === void 0) {
    return (0, import_store.getAsyncStoreInstance)().run(new import_map.default(), __rw_handler, __rw_event, __rw__context);
  }
  return __rw_handler(__rw_event, __rw__context);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  __rw_graphqlOptions,
  handler
});
//# sourceMappingURL=graphql.js.map
