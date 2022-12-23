import { add } from "./main";

describe(add.name, () => {
  it("adds two numbers", () => {
    expect(3 + 4).toBe(7);
  });
});
