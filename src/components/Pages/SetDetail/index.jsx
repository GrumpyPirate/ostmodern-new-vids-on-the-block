// React
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Vendor
// import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

// Config
import { API_BASE_URL } from '../../../config/contentSettings';

// Components
import Heading from '../../Typography/Heading';
import withContentService from '../../HOCs/withContentService';

// Define components
class SetPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: false,
      set: null
    };
  } // /constructor

  getData () {
    const { uid, title } = this.props.set;

    this.setState({ isLoading: true });
    this.props.contentService
      .getSet(uid)
      .then(res => {
        this.setState({ set: res });
        // Sample data
        // -----------
        // active: true
        // body: "Excellence isn't good enough. To qualify as a festival favourite you have to deliver something beyond escapism, something that resonates with a very discerning crowd before it staggers the world.  It's a rare achievement, captured in this selection of short films and interviews with the people behind many of the most fevered, intense visions of recent history."
        // cached_film_count: 0
        // created: "2014-10-25T12:45:54+00:00"
        // created_by: "admin@example.com"
        // ends_on: "2100-01-01T00:00:00+00:00"
        // featured: false
        // film_count: 0
        // formatted_body: "<p>Excellence isn't good enough. To qualify as a festival favourite you have to deliver something beyond escapism, something that resonates with a very discerning crowd before it staggers the world.  It's a rare achievement, captured in this selection of short films and interviews with the people behind many of the most fevered, intense visions of recent history.</p>"
        // has_price: false
        // hierarchy_url: "collections/bfi-london-film-festival-presents"
        // image_urls: (2) ["/api/images/imag_fcdf67481d8147e6844d838f4112fca3/", "/api/images/imag_fcdf67481d8147e6844d838f4112fca1/"]
        // items: []
        // language_ends_on: "2100-01-01T00:00:00+00:00"
        // language_modified: "2014-10-25T12:45:54.255000+00:00"
        // language_modified_by: null
        // language_publish_on: "2014-10-24T00:00:00+00:00"
        // language_version_number: 0
        // language_version_url: "/api/sets/coll_040523152e4f4e4c8a77b19db982330e/language-versions/0/"
        // lowest_amount: null
        // modified: "2014-10-25T12:45:54.255000+00:00"
        // modified_by: null
        // plans: []
        // publish_on: "2014-10-24T00:00:00+00:00"
        // quote: "Film festivals at their best, I think, are a window and also a mirror. A window through which we can see the world and a mirror in which we can see ourselves."
        // quoter: "Paul Greengrass"
        // schedule_url: "/api/schedules/sche_aeba759af1f44c9ca75564c363c870b6/"
        // schedule_urls: ["/api/schedules/sche_aeba759af1f44c9ca75564c363c870b6/"]
        // self: "/api/sets/coll_040523152e4f4e4c8a77b19db982330e/"
        // set_type_slug: "collection"
        // set_type_url: "/api/set-types/sett_d0f36479dcf04a55848cbacc34bde8ec/"
        // slug: "festival-favourites"
        // summary: "Debuts, breakthroughs, winners and discoveries, courtesy of the London Film Festival."
        // temp_id: 989
        // temp_image: "Features_beasts-of-the-southern-wild-620x200.jpg"
        // title: "Festival Favourites"
        // uid: "coll_040523152e4f4e4c8a77b19db982330e"
        // version_number: 0
        // version_url: "/api/sets/coll_040523152e4f4e4c8a77b19db982330e/versions/0/"
      })
      .catch(err => {
        console.log(`Error fetching details for set '${title}': ${err}`)
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  } // /getData

  // Lifecycle
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      this.getData();
    }
  } // /componentDidUpdate

  componentDidMount() {
    this.getData();
  } // /componentDidMount

  render () {
    const isLoading = this.state.isLoading || !this.state.set;
    const { set } = this.state;

    const sanitiseHTML = (html) => {
      return {
        __html: html
      };
    };

    return (
      <Fragment>
        {isLoading
          ? <p>Loading...</p>
          : (
            <Fragment>
              {/* Title/summary */}
              <Heading level={1}>{set.title}</Heading>
              <Heading level={2} displayLevel={5}>{set.summary}</Heading>

              {/* Formatted body. We'd sanitise the hell out of this, though
                * we know that the source is safe. */}
              <div dangerouslySetInnerHTML={sanitiseHTML(set.formatted_body)} />

              {/* Set images */}
              {set.image_urls.map(IMAGE_URL => (
                <figure key={IMAGE_URL}>
                  <img src={`${API_BASE_URL}${IMAGE_URL}`} alt="" />
                </figure>
              ))}

              {/* Quote */}
              <blockquote>{set.quote}</blockquote>

              {/* Quoter */}
              <cite>{set.quoter}</cite>

              {/* Temp image */}
              <figure>
                <img src={set.temp_image} alt="" />
              </figure>
            </Fragment>
          )
        }
      </Fragment>
    );
  } // /render
} // /class SetPage

// PropTypes
SetPage.propTypes = {
  contentService: PropTypes.object.isRequired,
  set: PropTypes.shape({
    title: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired
  }).isRequired
};

// Redux bindings
const mapStateToProps = (state, ownProps) => {
  return {
    set: state.sets.find(
      set => set.slug.toLowerCase() === ownProps.match.params.slug.toLowerCase()
    )
  };
};

export default withRouter(connect(
  mapStateToProps
)(withContentService(SetPage)));
