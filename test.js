const assert = require("assert");
const CardConnectApi = require("./CardConnectApi.js");

describe("CardConnectApi", () => {
  beforeEach(() => {
    this.api = new CardConnectApi({
      baseUrl: process.env.BASE_URL,
      merchantId: process.env.MERCHANT_ID,
      authorizationHeader: process.env.AUTHORIZATION
    });
  });

  it("should list all terminals", async () => {
    const terminals = await this.api.listTerminals();
    assert(terminals.length > 0);
  });

  it.only("should connect to a terminal", async () => {
    const response = await this.api.connectTerminal({
      hsn: process.env.TESTABLE_TERMINAL,
      force: true
    });

    assert(response.connected);
  });
});