import React from "react";
import { shallow } from "enzyme";
import Heading from "./";

describe("<Heading />", () => {
  it("renders a default heading without crashing", () => {
    shallow(<Heading>Test heading text</Heading>);
  });

  it("renders an h1 when passed a level={1} prop", () => {
    const wrapper = shallow(<Heading level={1}>Test heading text</Heading>);
    expect(wrapper.dive().find("h1")).toHaveLength(1);
  });

  it("renders an h2 when passed a level={2} prop", () => {
    const wrapper = shallow(<Heading level={2}>Test heading text</Heading>);
    expect(wrapper.dive().find("h2")).toHaveLength(1);
  });

  it("renders an h3 when passed a level={3} prop", () => {
    const wrapper = shallow(<Heading level={3}>Test heading text</Heading>);
    expect(wrapper.dive().find("h3")).toHaveLength(1);
  });

  it("renders an h4 when passed a level={4} prop", () => {
    const wrapper = shallow(<Heading level={4}>Test heading text</Heading>);
    expect(wrapper.dive().find("h4")).toHaveLength(1);
  });

  it("renders an h5 when passed a level={5} prop", () => {
    const wrapper = shallow(<Heading level={5}>Test heading text</Heading>);
    expect(wrapper.dive().find("h5")).toHaveLength(1);
  });

  it("renders an h6 when passed a level={6} prop", () => {
    const wrapper = shallow(<Heading level={6}>Test heading text</Heading>);
    expect(wrapper.dive().find("h6")).toHaveLength(1);
  });
});
