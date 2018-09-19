import React from 'react';
import { shallow } from 'enzyme';
import App from '../../app/App';
import configureStore from 'redux-mock-store'

const initialState = {}; 
const mockStore = configureStore();
let store;

describe('<App />', () => {
  beforeEach(() => {
    store = mockStore(initialState)
   });

  it('renders without crashing', () => {
    shallow(<App store={store} />);
  });
});
