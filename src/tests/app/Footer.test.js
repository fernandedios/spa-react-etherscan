import React from 'react';
import { Footer } from '../../app/Footer';
import { setup, createSnap } from '../utils';

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('should have the correct classNames', () => {
    const output = setup(Footer);
    expect(output.find('footer').hasClass('footer')).toEqual(true);
  });

  it('should render correctly', () => {
    const output = createSnap(Footer);
    expect(output).toMatchSnapshot();
  });
});
