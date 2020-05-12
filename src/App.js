import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './scss/App.scss';
import { Controls } from './Controls';
import Resume from './Resume';
import Note from './Note';

class App extends Component {
  render() {
    return (
      <div>
        <TransitionGroup className="transition-group">
          <CSSTransition
            timeout={{ enter: 400, exit: 400 }}
            classNames="TransitionPage"
            key={this.props.location.pathname}
          >
            <Switch location={this.props.location}>
              <Route exact path="/twocol" component={Resume} />
              <Route exact path="/trad" component={Resume} />
              <Redirect from="" to="/trad" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Controls />
        <Note />
      </div>
    );
  }
}

export default withRouter(App);