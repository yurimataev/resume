import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function Controls() {

  let toggleSwitchValue = true;

  if (window.location.hash === "#twocol") {
    toggleSwitchValue = false;
    document.body.className='twocol';
  } else {
    window.location.hash = '#trad';
    document.body.className='trad';
  }

  return (
    <div class="controls">
      <h2>Layout</h2>
      <ToggleSwitch
        id="LayoutSwitcher"
        Title='Layout'
        Text={['Traditional', 'Two-Column']}
        defaultChecked={toggleSwitchValue}
        onChange={(e) => {
          _layoutSwitcher(e.target.checked);
        }}
      />
    </div>
  );
}

function _layoutSwitcher (checkedStatus) {
  const thePage = document.getElementById('page');
  let handler = (e) => {
    if (checkedStatus === true) {
      document.body.className='trad';
      window.location.hash='trad';
    } else {
      document.body.className='twocol';
      window.location.hash='twocol';
    }
    thePage.ontransitionend = null;
    thePage.style.opacity = 1;
  };
  thePage.ontransitionend = handler;
  thePage.style.opacity = 0;
}

export default Controls;
