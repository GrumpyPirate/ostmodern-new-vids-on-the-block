import React from "react";
import { shallow } from "enzyme";
import Spinner from "./";

const testProps = {
  isLoading: true
};

describe("<Spinner />", () => {
  it("renders without crashing", () => {
    shallow(<Spinner {...testProps} />);
  });
});
