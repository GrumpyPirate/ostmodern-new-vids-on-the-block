import React from "react";
import { shallow } from "enzyme";
import EpisodeDetailMedia from "./";

describe("<EpisodeDetailMedia />", () => {
  it("renders without crashing", () => {
    shallow(<EpisodeDetailMedia />);
  });
});
