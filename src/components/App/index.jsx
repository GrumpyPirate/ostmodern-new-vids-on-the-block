// React
import React, { Component } from "react";

// Vendor
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { saturation, brightness } from "chromatism";

// Utils
import { rem } from "../../utilities";

// Components
import Header from "../Header";
import HomeView from "../Pages/HomeView";
import EpisodeDetailView from "../Pages/EpisodeDetailView";

// Styles
import theme from "../../styles/theme";
import { lgUp } from "../../styles/mediaQueries";

// Define components
const Main = styled.main`
  position: absolute;
  top: ${rem(theme.elements.header.height.xs)};
  right: 0;
  width: 100%;
  height: calc(100% - ${rem(theme.elements.header.height.xs)});
  padding-top: ${rem(theme.grid.gutter.xs / 2)};
  padding-bottom: ${rem(theme.grid.gutter.xs / 2)};
  background-color: ${brightness(
    15,
    saturation(-25, theme.colors.shadeDark).hex
  ).hex};
  color: ${theme.colors.shadeLight};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media ${lgUp} {
    top: ${rem(theme.elements.header.height.lg)};
    height: calc(100% - ${rem(theme.elements.header.height.lg)});
    padding-top: ${rem(theme.grid.gutter.lg / 2)};
    padding-bottom: ${rem(theme.grid.gutter.lg / 2)};
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className={this.props.className}>
          <Header />

          <Main>
            <Switch>
              {/* Index route */}
              <Route exact path="/collections/home" component={HomeView} />
              <Route
                path="/episodes/:slug"
                render={({ match, location }) => {
                  if (!!location.state && !!location.state.episodeDetail) {
                    const { episodeDetail } = location.state;
                    return <EpisodeDetailView episodeDetail={episodeDetail} />;
                  }

                  return <Redirect to="/collections/home" />;
                }}
              />

              {/* 404? Redirect to index */}
              <Route render={() => <Redirect to="/collections/home" />} />
            </Switch>
          </Main>
        </div>
      </Router>
    );
  } // /render
} // /class App

export default App;
