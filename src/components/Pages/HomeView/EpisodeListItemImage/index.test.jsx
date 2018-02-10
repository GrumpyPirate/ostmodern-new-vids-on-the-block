import React from "react";
import { shallow } from "enzyme";
import EpisodeListItemImage from "./";

describe("<EpisodeListItemImage />", () => {
  it("renders without crashing", () => {
    shallow(<EpisodeListItemImage />);
  });
});
