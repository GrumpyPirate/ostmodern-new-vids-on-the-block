import React from "react";
import { shallow } from "enzyme";
import withContentService from "./";
import ContentService from "../../../services/ContentService";

let Component;
describe("HOC withContentService", () => {
  beforeEach(() => {
    Component = withContentService(() => <div>Test component</div>);
  });

  it("wraps a generic component without crashing", () => {
    shallow(<Component />);
  });

  it("returns a new component, with a contentService prop", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.props().contentService).toBeDefined();
    expect(wrapper.props().contentService).toBeInstanceOf(ContentService);
  });
});
