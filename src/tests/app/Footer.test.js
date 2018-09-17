import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';
import { Footer } from '../../app/Footer';

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('should have the correct classNames', () => {
    const output = shallow(<Footer />);

    expect(output.find('footer').hasClass('footer')).toEqual(true);
  });

  it('should render correctly', () => {
    const output = ReactTestRenderer.create(<Footer />).toJSON();
    expect(output).toMatchSnapshot();
  });
});
