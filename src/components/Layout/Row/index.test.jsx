import React from "react";
import { shallow, mount } from "enzyme";
import Row from "./";

describe("<Row />", () => {
  it("renders without crashing", () => {
    shallow(<Row />);
  });

  it("aligns items centrally when passed a boolean prop", () => {
    const wrapper = shallow(<Row centred />);
    expect(wrapper).toHaveStyleRule("align-items", "center");
  });
});
