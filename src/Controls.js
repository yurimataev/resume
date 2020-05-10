import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';

function PureControls(props) {

  let toggleSwitchValue = true;

  if (props.location.pathname === "/twocol"){
    toggleSwitchValue = false;
  }

  return (
    <div class="controls">
      <h2>Resume Layout</h2>
      <ToggleSwitch
        id="LayoutSwitcher"
        Title='Layout'
        Text={['Traditional', 'Two-Column']}
        defaultChecked={toggleSwitchValue}
        onChange={(e) => {
          if (e.target.checked === true) {
            props.history.push("/trad");
          } else {
            props.history.push("/twocol");
          }
        }}
      />
    </div>
  );
}

function PureBasicControls({ match }) {

  return (
    <div class="controls">
      <h2>Resume Layout</h2>
      <div><Link to="/trad">Traditional</Link></div>
      <div><Link to="/twocol">Two-Column</Link></div>
    </div>
  );
}

const Controls = withRouter(PureControls);
const BasicControls = withRouter(PureBasicControls);

export { Controls, BasicControls };