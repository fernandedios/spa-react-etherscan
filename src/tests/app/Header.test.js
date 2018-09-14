import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';
import { Header } from '../../app/Header';

describe('<Header />', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('should have the correct classNames', () => {
    const output = shallow(<Header />);

    expect(output.find('nav').hasClass('is-info')).toEqual(true);
    expect(output.find('nav').hasClass('navbar')).toEqual(true);
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<Header />).toJSON();
    expect(output).toMatchSnapshot();
  });
});