import { rem } from "./";

describe("utilities: rem", () => {
  it("should export a rem() function", () => {
    expect(rem).toBeDefined();
    expect(typeof rem).toBe("function");
  });

  it("should correctly calculate rems from pixel values", () => {
    expect(rem(16)).toBe("1rem");
    expect(rem(24)).toBe("1.5rem");
    expect(rem(32)).toBe("2rem");
    expect(rem(137)).toBe("8.5625rem");
  });
});
