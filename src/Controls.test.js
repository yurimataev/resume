import React from 'react';
import { shallow, mount } from "enzyme";
import Controls from './Controls';
import ToggleSwitch from './ToggleSwitch';

test('Heading present', () => {
  const wrapper = shallow(<Controls />);
  expect (
    wrapper.containsMatchingElement(
      <h2>Layout</h2>
    )
  ).toBe(true);
});

test('Hash is set to "#trad" if unspecified', () => {
  const wrapper = shallow(<Controls />);

  const toggleSwitch = wrapper.find(ToggleSwitch);

  expect(window.location.hash).toBe('#trad');
  expect(toggleSwitch.props().defaultChecked).toBe(true);
  expect(document.body.className).toBe('trad');
});

// Test that if hash is #trad, checkbox is checked
test('If hash is "#trad", checkbox is checked', () => {
  window.location.hash = '#trad';
  const wrapper = shallow(<Controls />);

  const toggleSwitch = wrapper.find(ToggleSwitch);

  // expect(window.location.hash).toBe('#trad');
  expect(toggleSwitch.props().defaultChecked).toBe(true);
  expect(document.body.className).toBe('trad');
});

// Test that if hash is #twocol, checkbox is unchecked
test('If hash is "#twocol", checkbox is unchecked', () => {
  window.location.hash = '#twocol';
  const wrapper = shallow(<Controls />);

  const toggleSwitch = wrapper.find(ToggleSwitch);

  // expect(window.location.hash).toBe('#trad');
  expect(toggleSwitch.props().defaultChecked).toBe(false);
  expect(document.body.className).toBe('twocol');
});

// Test random hash string, expect hash to be #trad, and checkbox checked
test('If hash is "#random", checkbox is checked', () => {
  window.location.hash = '#random';
  const wrapper = shallow(<Controls />);

  const toggleSwitch = wrapper.find(ToggleSwitch);

  expect(window.location.hash).toBe('#trad');
  expect(toggleSwitch.props().defaultChecked).toBe(true);
  expect(document.body.className).toBe('trad');
});

/*
    User Interaction Tests
*/

test('User clicks on toggle switch', () => {

  // Because we're using a hybrid
  let pageDiv = document.createElement('div');
  pageDiv.setAttribute('id', 'page');
  document.body.appendChild(pageDiv);

  const wrapper = mount(<Controls />);
  const toggleSwitch = wrapper.find(ToggleSwitch);

  expect(document.body.className).toBe('trad');

  toggleSwitch.simulate('change');

  setTimeout(() => {
    expect(document.body.className).toBe('twocol');
  }, 500);
});