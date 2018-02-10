import { API_BASE_URL, sets, bollocks } from "./contentSettings";

describe("contentSettings", () => {
  it('should export an "API_BASE_URL" property', () => {
    expect(API_BASE_URL).toBeDefined();
  });

  it('should export a "sets" property', () => {
    expect(sets).toBeDefined();
  });
});
