import React from 'react';
import { Header } from '../../app/Header';
import { setup, createSnap } from '../utils';

describe('<Header />', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('should have the correct classNames', () => {
    const output = setup(Header);

    expect(output.find('nav').hasClass('is-info')).toEqual(true);
    expect(output.find('nav').hasClass('navbar')).toEqual(true);
  });

  it('should render correctly', () => {
    const output = createSnap(Header);
    expect(output).toMatchSnapshot();
  });
});
