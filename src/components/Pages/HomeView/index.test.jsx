import React from "react";
import { shallow } from "enzyme";
import HomeView from "./";

describe("<HomeView />", () => {
  it("renders without crashing", () => {
    shallow(<HomeView />);
  });
});
