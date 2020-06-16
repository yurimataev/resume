import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';

function PureControls(props) {
  let layoutSwitchValue = true;
  let introSwitchValue = true;

  if (props.location.pathname === '/twocol') {
    layoutSwitchValue = false;
  }
  if (props.introMode === 'objective') {
    introSwitchValue = false;
  }

  return (
    <div className="controls">
      <h2>Resume Layout</h2>
      <ToggleSwitch
        id="LayoutSwitcher"
        Title="Layout"
        Text={['Traditional', 'Two-Column']}
        currentValue={layoutSwitchValue}
        onChange={(e) => {
          if (e.target.checked === true) {
            props.history.push('/trad');
          } else {
            props.history.push('/twocol');
          }
        }}
      />
      <ToggleSwitch
        id="IntroSwitcher"
        Title="Introduction"
        Text={['Summary', 'Objective']}
        currentValue={introSwitchValue}
        onChange={(e) => {
          if (e.target.checked === true) {
            props.introSwitcher('summary');
          } else {
            props.introSwitcher('objective');
          }
        }}
      />
      <h3>Desired Role</h3>
      <input
        type="text"
        value={props.role}
        onChange={(e) => {
          props.roleSwitcher(e.target.value);
        }}
      />
    </div>
  );
}

function BasicControls() {
  return (
    <div className="controls">
      <h2>Resume Layout</h2>
      <div><Link to="/trad">Traditional</Link></div>
      <div><Link to="/twocol">Two-Column</Link></div>
    </div>
  );
}

const Controls = withRouter(PureControls);

export { Controls, BasicControls };
