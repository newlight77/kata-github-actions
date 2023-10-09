import { newLogger } from "@shared-lib/logger";

const logger = newLogger("logger test");
logger.debug = logger.noOp;

describe("redis-client", () => {

  it("test exampple", () => {
    expect("").toBe("");
  });

});
