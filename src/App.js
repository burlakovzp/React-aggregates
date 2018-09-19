import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Aggregates from './components/Aggregates';
import Header from './components/Header';
import styles from './styles';

class App extends Component {
    render() {
        return (
            <div>
                <div className={this.props.classes.header_margin}>
                    <Header />
                </div>
                <Switch>
                    <Route exact path="/" component={Aggregates} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(
  state => ({ store: state })
)(withStyles(styles, { withTheme: true })(App)));      
