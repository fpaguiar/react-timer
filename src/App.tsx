import * as React from 'react';
import Timer from './components/Timer/Timer';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <header>
          <span>React-Timer</span>
        </header>
        <section>
          <Timer />
        </section>
      </div>
    );
  }
}

export default App;
