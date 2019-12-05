import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submition</h1>
          <p>An email with futher instructions has been sent to you!</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success;
