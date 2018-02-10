import React from "react";
import { shallow } from "enzyme";
import EpisodeListItemTitle from "./";

describe("<EpisodeListItemTitle />", () => {
  it("renders without crashing", () => {
    shallow(
      <EpisodeListItemTitle>
        <div>Test</div>
      </EpisodeListItemTitle>
    );
  });
});
