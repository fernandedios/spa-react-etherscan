import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

export const setup = (Component, props = {}, state = null) => {
    const wrapper = shallow(<Component {...props} />);
    if (state) wrapper.setState(state);
    return 
};

export const findByAttr = (wrapper, attr, val) => {
    return wrapper.find(`[${attr}='${val}']`);
};

export const createSnap = (Component) => {
    return ReactTestRenderer.create(<Component />).toJSON();
};
