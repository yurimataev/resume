import React, { Component } from 'react';
import PropTypes from "prop-types";
import './scss/ToggleSwitch.scss';

/*
Toggle Switch Component
Note: id is required for ToggleSwitch component to function. Name, currentValue, defaultChecked, Small and onChange are optional.
Usage: <ToggleSwitch id="id" onChange={function (e) { console.log("Checkbox Current State: " + e.target.checked); }} />
*/

class ToggleSwitch extends Component {
  state = {
    checked: this.props.currentValue
  };
  onChange = e => {
    this.setState({
      checked: e.target.checked
    });
    if (typeof this.props.onChange === "function") this.props.onChange(e);
  };
  render() {
    return (
      <div
        className="toggle-switch"
      >
        <input
          type="checkbox"
          name={this.props.Name}
          className="toggle-switch-checkbox"
          id={this.props.id}
          checked={this.props.currentValue}
          onChange={this.onChange}
          disabled={this.props.disabled}
        />
        {this.props.id ? (
          <label className="toggle-switch-label" htmlFor={this.props.id}>
            <span
              className={
                this.props.disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
              data-yes={this.props.Text[0]}
              data-no={this.props.Text[1]}
            />
            <span
              className={
                this.props.disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
            />
          </label>
        ) : null}
      </div>
    );
  }
  // Set text for rendering.
  static defaultProps = {
    Text: ["Yes", "No"]
  };
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  Text: PropTypes.array.isRequired,
  Name: PropTypes.string,
  Title: PropTypes.string,
  onChange: PropTypes.func,
  currentValue: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitch;
