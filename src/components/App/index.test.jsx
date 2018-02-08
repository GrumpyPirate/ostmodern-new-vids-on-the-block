import React from 'react';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import App from './';

// Pass a mock store as a prop
const testState = {};
const mockStore = configureStore()
let store;

describe('<App />', () => {
  beforeEach(() => {
    store = mockStore(testState);
  });

  it('renders without crashing', () => {
    shallow(<App store={store} />);
  });
});
