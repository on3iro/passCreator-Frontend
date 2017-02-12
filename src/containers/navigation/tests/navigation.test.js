import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../';
import NavEntry from '../navEntry';

describe('Navigation', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('div').exists()).toEqual(true);
    expect(wrapper.find('nav').exists()).toEqual(true);
    expect(wrapper.find('ul').exists()).toEqual(true);
    expect(wrapper.find(NavEntry)).toHaveLength(2);
  });
});