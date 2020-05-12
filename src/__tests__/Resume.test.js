import React from 'react';
import { shallow } from "enzyme";
import Resume from "../Resume";

describe('Resume Component', () => {
  it('should set div#page class to twocol if match.path is /twocol', () => {
    let match = { path:'/twocol' };

    const wrapper = shallow(<Resume match={ match }/>);

    expect(
      wrapper.find('#page').get(0).props.className
    ).toBe('normal-text twocol');
  });

  it('should set div#page class to trad if match.path is /trad', () => {
    let match = { path:'/randomhash' };

    const wrapper = shallow(<Resume match={ match }/>);

    expect(
      wrapper.find('#page').get(0).props.className
    ).toBe('normal-text trad');
  });
});