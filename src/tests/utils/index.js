import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

export const setup = (Component, props = {}, state = null) => {
    return shallow(<Component {...props} />);
};

export const findByAttr = (wrapper, attr, val) => {
    return wrapper.find(`[${attr}='${val}']`);
};

export const createSnap = (Component) => {
    return ReactTestRenderer.create(<Component />).toJSON();
};
