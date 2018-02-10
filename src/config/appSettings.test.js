import appSettings from "./appSettings";

describe("appSettings", () => {
  it('should contain an "appName" property', () => {
    expect(appSettings.hasOwnProperty("appName")).toBe(true);
  });
});
