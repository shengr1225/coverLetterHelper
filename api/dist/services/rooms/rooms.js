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
var rooms_exports = {};
__export(rooms_exports, {
  room: () => room,
  sendMessage: () => sendMessage
});
module.exports = __toCommonJS(rooms_exports);
var import_logger = require("../../lib/logger");
const room = ({
  id
}) => [id];
const sendMessage = async ({
  input
}, {
  context
}) => {
  import_logger.logger.debug({
    input
  }, "sending message ....");
  const {
    roomId,
    from,
    body
  } = input;
  context.pubSub.publish("newMessage", roomId, {
    from,
    body
  });
  return input;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  room,
  sendMessage
});
//# sourceMappingURL=rooms.js.map
