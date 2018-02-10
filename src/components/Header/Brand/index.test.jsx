import React from "react";
import { shallow } from "enzyme";
import Brand from "./";

describe("<Brand />", () => {
  const testProps = {
    to: "/"
  };

  it("renders without crashing", () => {
    shallow(<Brand {...testProps} />);
  });
});
