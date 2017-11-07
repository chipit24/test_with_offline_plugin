import React, { Component } from 'react';
import { render } from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();

class App extends Component {
  render() {
    return <h1>Test</h1>;
  }
}

render(<App />, document.getElementById('app'));
