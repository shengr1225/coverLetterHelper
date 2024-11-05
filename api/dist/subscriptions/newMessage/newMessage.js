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
var newMessage_exports = {};
__export(newMessage_exports, {
  default: () => newMessage_default,
  schema: () => schema
});
module.exports = __toCommonJS(newMessage_exports);
var import_logger = require("../../lib/logger");
const schema = {
  "kind": "Document",
  "definitions": [{
    "kind": "ObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "Subscription"
    },
    "interfaces": [],
    "directives": [],
    "fields": [{
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "newMessage"
      },
      "arguments": [{
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "roomId"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          }
        },
        "directives": []
      }],
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Message"
          }
        }
      },
      "directives": [{
        "kind": "Directive",
        "name": {
          "kind": "Name",
          "value": "requireAuth"
        },
        "arguments": []
      }]
    }]
  }],
  "loc": {
    "start": 0,
    "end": 78,
    "source": {
      "body": "\n  type Subscription {\n    newMessage(roomId: ID!): Message! @requireAuth\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const newMessage = {
  newMessage: {
    subscribe: (_, {
      roomId
    }, {
      pubSub
    }) => {
      import_logger.logger.debug({
        roomId
      }, "newMessage subscription");
      return pubSub.subscribe("newMessage", roomId);
    },
    resolve: (payload) => {
      import_logger.logger.debug({
        payload
      }, "newMessage subscription resolve");
      return payload;
    }
  }
};
var newMessage_default = newMessage;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=newMessage.js.map
