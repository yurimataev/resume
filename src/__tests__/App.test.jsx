import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../App';

/*
    User Interaction Tests
*/

describe('Main App', () => {
  it('should send user to /trad when he toggles the switch on /twocol', () => {
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = '/twocol';
    const pushSpy = jest.spyOn(historyObj, 'push');

    const wrapper = mount(
      <Router history={historyObj}>
        <App />
      </Router>,
    );

    const toggleSwitch = wrapper.find('input#LayoutSwitcher');
    expect(toggleSwitch.get(0).props.checked).toBe(false);
    toggleSwitch.at(0).simulate('change', { target: { checked: true } });

    expect(pushSpy).toHaveBeenCalledWith('/trad');
  });

  it('should send user to /twocol when he toggles the switch on /trad', () => {
    const historyObj = createMemoryHistory();
    const pushSpy = jest.spyOn(historyObj, 'push');

    const wrapper = mount(
      <Router history={historyObj}>
        <App />
      </Router>,
    );

    expect(historyObj.location.pathname).toBe('/trad');

    const toggleSwitch = wrapper.find('input#LayoutSwitcher');
    expect(toggleSwitch.get(0).props.checked).toBe(true);
    toggleSwitch.at(0).simulate('change', { target: { checked: false } });

    expect(pushSpy).toHaveBeenCalledWith('/twocol');
  });
});
