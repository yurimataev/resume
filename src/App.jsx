import React from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './scss/App.scss';
import { Controls } from './Controls';
import Resume from './Resume';
import Note from './Note';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.introSwitcher = this.introSwitcher.bind(this)
    this.roleSwitcher = this.roleSwitcher.bind(this)

    this.state = {
      introMode : 'summary',
      role      : 'Software Engineer'
    }
  }

  introSwitcher (value) {
    this.setState({ introMode : value });
  }
  roleSwitcher (value) {
    this.setState({ role : value });
  }

  render () {
    return (
      <div id="positioner">
        <TransitionGroup className="transition-group">
          <CSSTransition
            timeout={{ enter: 400, exit: 400 }}
            classNames="TransitionPage"
            key={this.props.location.pathname}
          >
            <Switch location={this.props.location}>
              <Route exact path="/twocol"
                     render={(props) => <Resume path="/twocol" introMode={this.state.introMode} role={this.state.role} />}
              />
              <Route exact path="/trad"
                     render={(props) => <Resume path="/trad" introMode={this.state.introMode} role={this.state.role} />}
              />
              <Redirect from="" to="/trad" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <div id="right-positioner">
          <Controls
              introSwitcher={this.introSwitcher}
              introMode={this.state.introMode}
              roleSwitcher={this.roleSwitcher}
              role={this.state.role}
          />
          <Note />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
