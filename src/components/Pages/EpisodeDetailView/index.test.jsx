import React from "react";
import { shallow } from "enzyme";
import EpisodeDetailView from "./";

const testProps = {
  episodeDetail: {}
};

describe("<EpisodeDetailView />", () => {
  it("renders without crashing", () => {
    shallow(<EpisodeDetailView {...testProps} />);
  });
});
