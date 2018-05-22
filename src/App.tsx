import * as React from 'react';
import Timer from './components/Timer/Timer';


class App extends React.Component {
  public render() {
    return (
      <div>
        <header>
          <div className="hero is-dark">
            <div className="hero-body">
              <div className="container">
              <h1 className="title">
                <span className="icon is-large">
                    <i className="fas fa-clock" />
                </span>
                <span>React-Timer</span>
              </h1>
              </div>
            </div>
          </div>
        </header>
        <section className="section">
          <Timer />
        </section>
      </div>
    );
  }
}

export default App;
