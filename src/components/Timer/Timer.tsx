import * as React from 'react';
import ActionMenu from './components/ActionMenu/ActionMenu';
import Display from './components/Display/Display';

import './Timer.css';

class Timer extends React.Component {
    public render() {
        return (
            <div className="timer">
                <Display />
                <ActionMenu />
            </div>
        );
    }
}

export default Timer;