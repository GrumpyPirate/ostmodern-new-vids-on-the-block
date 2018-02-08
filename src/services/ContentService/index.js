import { API_BASE_URL } from '../../config/contentSettings';

export default class ContentService {
  constructor () {
    this.defaultFetchOptions = {
      method: 'GET'
    }
  }

  /**
   * makeRequest
   * Performs a generic fetch request to a given URL.
   * Let's use await rather than promises, because variety
   * is the spice of life etc
   *
   * @param  {String} url         API endpoint
   * @param  {Object} options     Options object to pass to fetch
   * @return {Promise<Object>}    Promise for a JSON object
   */
  async makeRequest (url, options = this.defaultFetchOptions) {
    const response = await fetch(url, options);
    return await response.json();
  }

  // Sets
  getAllSets () {
    return this.makeRequest(`${API_BASE_URL}/api/sets/`);
  }

  getSet (uid) {
    return this.makeRequest(`${API_BASE_URL}/api/sets/${uid}/`);
  }

  getSetItems (uid) {
    return this.makeRequest(`${API_BASE_URL}/api/sets/${uid}/items/`);
  }

  // Episodes
  getEpisode (uid) {
    return this.makeRequest(`${API_BASE_URL}/api/episodes/${uid}/`);
  }

  // Dividers
  getDivider (uid) {
    return this.makeRequest(`${API_BASE_URL}/api/dividers/${uid}/`);
  }
} // /class ContentService
