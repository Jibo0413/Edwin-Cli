"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("edwin-cli:react", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/react"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file(["dummyfile.txt"]);
  });
});
