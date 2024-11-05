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
var countdown_exports = {};
__export(countdown_exports, {
  default: () => countdown_default,
  schema: () => schema
});
module.exports = __toCommonJS(countdown_exports);
var import_set_interval = __toESM(require("@babel/runtime-corejs3/core-js/set-interval"));
var import_realtime = require("@redwoodjs/realtime");
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
        "value": "countdown"
      },
      "arguments": [{
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "from"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "interval"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
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
            "value": "Int"
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
    "end": 88,
    "source": {
      "body": "\n  type Subscription {\n    countdown(from: Int!, interval: Int!): Int! @requireAuth\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const countdown = {
  countdown: {
    subscribe: (_, {
      from = 100,
      interval = 10
    }) => new import_realtime.Repeater((push, stop) => {
      function decrement() {
        from -= interval;
        if (from < 0) {
          import_logger.logger.debug({
            from
          }, "stopping as countdown is less than 0");
          stop();
        }
        import_logger.logger.debug({
          from
        }, "pushing countdown value ...");
        push(from);
      }
      decrement();
      const delay = (0, import_set_interval.default)(decrement, 500);
      stop.then(() => {
        clearInterval(delay);
        import_logger.logger.debug("stopping countdown");
      });
    }),
    resolve: (payload) => payload
  }
};
var countdown_default = countdown;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=countdown.js.map
