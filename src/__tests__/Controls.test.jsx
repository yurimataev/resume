import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import { Controls, BasicControls } from '../Controls';
import ToggleSwitch from '../ToggleSwitch';

// Testing Controls
describe('Controls Function', () => {
  it('should render', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Controls />
      </MemoryRouter>,
    );

    expect(
      wrapper.containsMatchingElement(
        <h2>Resume Layout</h2>,
      ),
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(ToggleSwitch),
    ).toBe(true);
  });

  it('should have LayoutSwitcher ToggleSwitch set to true when hash is not #twocol', () => {
    const randomhash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const wrapper = mount(
      <MemoryRouter initialEntries={['/' + randomhash]}>
        <Controls />
      </MemoryRouter>,
    );

    const toggleSwitch = wrapper.find('input#LayoutSwitcher');
    expect(toggleSwitch.get(0).props.checked).toBe(true);
  });

  it('should have LayoutSwitcher ToggleSwitch set to true when hash is #twocol', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/twocol']}>
        <Controls />
      </MemoryRouter>,
    );

    const toggleSwitch = wrapper.find('input#LayoutSwitcher');
    expect(toggleSwitch.get(0).props.checked).toBe(false);
  });
});

// Testing BasicControls
describe('BasicControls Function', () => {
  it('should render', () => {
    const wrapper = mount(
      <MemoryRouter>
        <BasicControls />
      </MemoryRouter>,
    );
    expect(
      wrapper.containsMatchingElement(
        <h2>Resume Layout</h2>,
      ),
    ).toBe(true);
  });
});
