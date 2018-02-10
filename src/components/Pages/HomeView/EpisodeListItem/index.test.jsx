import React from "react";
import { shallow } from "enzyme";
import EpisodeListItem from "./";

describe("<EpisodeListItem />", () => {
  it("renders without crashing", () => {
    shallow(<EpisodeListItem />);
  });
});
