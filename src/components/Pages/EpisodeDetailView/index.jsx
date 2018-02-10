// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Vendor
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import EpisodeDetailMedia from "./EpisodeDetailMedia";
import Heading from "../../Typography/Heading";
import Container from "../../Layout/Container";
import Row from "../../Layout/Row";
import Column from "../../Layout/Column";
import withContentService from "../../HOCs/withContentService";

// Define components
const StyledLink = styled(Link)`
  color: inherit;

  &,
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

class EpisodeDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasFailed: false,
      feedback: null
    };
  } // /constructor

  // Lifecycle
  render() {
    const { episodeDetail } = this.props;

    return (
      <Container>
        {/* Title */}
        <Heading level={2}>{episodeDetail.title}</Heading>

        <hr />

        {/* Back to set view */}
        <p>
          <StyledLink to="/collections/home">&lt; Back</StyledLink>
        </p>

        <Row>
          {/* Media */}
          <Column md={6}>
            <EpisodeDetailMedia />
          </Column>

          {/* Synopsis */}
          <Column md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              sunt modi, architecto, repellat eaque quasi voluptas autem
              reiciendis! Cumque corporis a quas, ipsa sit!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam pariatur, molestiae! Mollitia odio deserunt nihil at
              ipsam illo, eaque illum amet consequuntur eius quidem sapiente
              unde quos, aut a cupiditate ullam dolor cum veritatis!
              Repudiandae, maiores ipsam. Minus accusantium, neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              quas, ipsa deserunt nemo deleniti commodi animi iusto maiores!
              Nemo, voluptas!
            </p>
          </Column>
        </Row>
      </Container>
    );
  } // /render
} // /class EpisodeDetailView

// PropTypes
EpisodeDetailView.propTypes = {
  episodeDetail: PropTypes.shape({
    created: PropTypes.string,
    // "2014-10-25T14:35:27.670000+00:00"
    created_by: PropTypes.string,
    // null
    ends_on: PropTypes.string,
    // "2100-01-01T00:00:00+00:00"
    episode_number: PropTypes.number,
    // null
    image_urls: PropTypes.arrayOf(PropTypes.string),
    // []
    items: PropTypes.arrayOf(PropTypes.string),
    // ["/api/assets/asse_7d92084d120f45bfa325a60176e8c513/"]
    language_ends_on: PropTypes.string,
    // "2100-01-01T00:00:00+00:00"
    language_modified: PropTypes.string,
    // "2014-10-25T14:35:27.670000+00:00"
    language_modified_by: PropTypes.string,
    // null
    language_publish_on: PropTypes.string,
    // "2014-10-24T00:00:00+00:00"
    language_version_number: PropTypes.number,
    // 0
    language_version_url: PropTypes.string,
    // "/api/episodes/film_5833235884af4ce6b1e7077949a47655/language-versions/0/"
    modified: PropTypes.string,
    // "2014-10-25T14:35:27.670000+00:00"
    modified_by: PropTypes.string,
    // null
    parent_url: PropTypes.string,
    // null
    plan_urls: PropTypes.array,
    // []
    publish_on: PropTypes.string,
    // "2014-10-24T00:00:00+00:00"
    schedule_url: PropTypes.string,
    // "/api/schedules/sche_aeba759af1f44c9ca75564c363c870b6/"
    schedule_urls: PropTypes.arrayOf(PropTypes.string),
    // ["/api/schedules/sche_aeba759af1f44c9ca75564c363c870b6/"]
    self: PropTypes.string,
    // "/api/episodes/film_5833235884af4ce6b1e7077949a47655/"
    slug: PropTypes.string,
    // "sea-dreams-1914"
    subtitle: PropTypes.string,
    // null
    synopsis: PropTypes.string,
    // ""
    tag_urls: PropTypes.array,
    // []
    talent_urls: PropTypes.array,
    // []
    title: PropTypes.string,
    // "Sea Dreams"
    uid: PropTypes.string,
    // "film_5833235884af4ce6b1e7077949a47655"
    version_number: PropTypes.number,
    // 0
    version_url: PropTypes.string
    // "/api/episodes/film_5833235884af4ce6b1e7077949a47655/versions/0/"
  }).isRequired
};

export default withContentService(EpisodeDetailView);
