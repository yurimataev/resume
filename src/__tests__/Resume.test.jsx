import React from 'react';
import { shallow, mount } from 'enzyme';
import Resume from '../Resume';

describe('Resume Component', () => {
  it('should set div#page class to twocol if path is /twocol', () => {
    const wrapper = shallow(<Resume path='/twocol' />);

    expect(
      wrapper.find('#page').get(0).props.className,
    ).toBe('normal-text twocol');
  });

  it('should set div#page class to trad if path is /trad', () => {
    const wrapper = shallow(<Resume path='/trad' />);

    expect(
      wrapper.find('#page').get(0).props.className,
    ).toBe('normal-text trad');
  });

  it('should display Summary if introMode is summary', () => {
    const wrapper = mount(<Resume path='/trad' introMode='summary' />);

    expect(
      wrapper.find('Intro').text(),
    ).toMatch(/Summary/);
  });

  it('should display Objective if introMode is objective', () => {
    const wrapper = mount(<Resume path='/trad' introMode='objective' role='Software Engineer' />);

    expect(
      wrapper.find('Intro').text(),
    ).toMatch(/Objective/);
  });
});