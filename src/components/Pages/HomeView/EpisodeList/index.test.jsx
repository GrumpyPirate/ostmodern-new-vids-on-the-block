import React from "react";
import { shallow } from "enzyme";
import EpisodeList from "./";

describe("<EpisodeList />", () => {
  it("renders without crashing", () => {
    shallow(
      <EpisodeList>
        <div>Test</div>
      </EpisodeList>
    );
  });
});
