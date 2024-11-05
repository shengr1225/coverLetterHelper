var import_api_server = require("@redwoodjs/api-server");
var import_logger = require("./lib/logger");
async function main() {
  const server = await (0, import_api_server.createServer)({
    logger: import_logger.logger
  });
  await server.start();
}
main();
//# sourceMappingURL=server.js.map
