import React from "react";
import { shallow } from "enzyme";
import BrandImage from "./";

describe("<BrandImage />", () => {
  it("renders without crashing", () => {
    shallow(<BrandImage />);
  });
});
