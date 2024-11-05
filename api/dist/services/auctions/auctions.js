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
var auctions_exports = {};
__export(auctions_exports, {
  Auction: () => Auction,
  auction: () => auction,
  bid: () => bid
});
module.exports = __toCommonJS(auctions_exports);
var import_find = __toESM(require("@babel/runtime-corejs3/core-js/instance/find"));
var import_find_index = __toESM(require("@babel/runtime-corejs3/core-js/instance/find-index"));
var import_sort = __toESM(require("@babel/runtime-corejs3/core-js/instance/sort"));
var import_logger = require("../../lib/logger");
const auctions = [{
  id: "1",
  title: "RedwoodJS Logo Shirt",
  bids: [{
    amount: 20
  }]
}, {
  id: "2",
  title: "RedwoodJS Lapel Pin",
  bids: [{
    amount: 5
  }]
}, {
  id: "3",
  title: "RedwoodJS Beanie",
  bids: [{
    amount: 15
  }]
}, {
  id: "4",
  title: "RedwoodJS Dad Hat",
  bids: [{
    amount: 20
  }]
}, {
  id: "5",
  title: "RedwoodJS Skater Hat",
  bids: [{
    amount: 20
  }]
}];
const auction = async ({
  id
}) => {
  const foundAuction = (0, import_find.default)(auctions).call(auctions, (a) => a.id === id);
  import_logger.logger.debug({
    id,
    auction: foundAuction
  }, "auction");
  return foundAuction;
};
const bid = async ({
  input
}, {
  context
}) => {
  const {
    auctionId,
    amount
  } = input;
  const index = (0, import_find_index.default)(auctions).call(auctions, (a) => a.id === auctionId);
  const bid2 = {
    amount
  };
  auctions[index].bids.push(bid2);
  import_logger.logger.debug({
    auctionId,
    bid: bid2
  }, "Added bid to auction");
  const key = `Auction:${auctionId}`;
  context.liveQueryStore.invalidate(key);
  import_logger.logger.debug({
    key
  }, "Invalidated auction key in liveQueryStore");
  return bid2;
};
const Auction = {
  highestBid: (obj, {
    root
  }) => {
    var _context;
    const [max] = (0, import_sort.default)(_context = root.bids).call(_context, (a, b) => b.amount - a.amount);
    import_logger.logger.debug({
      obj,
      root
    }, "highestBid");
    return max;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Auction,
  auction,
  bid
});
//# sourceMappingURL=auctions.js.map
