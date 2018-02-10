import { smUp, mdUp, lgUp, xlUp } from "./mediaQueries";

describe("mediaQueries", () => {
  it('should export an "smUp" property', () => {
    expect(smUp).toBeDefined();
  });

  it('should export an "mdUp" property', () => {
    expect(mdUp).toBeDefined();
  });

  it('should export an "lgUp" property', () => {
    expect(lgUp).toBeDefined();
  });

  it('should export an "xlUp" property', () => {
    expect(xlUp).toBeDefined();
  });
});
