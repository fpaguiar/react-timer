import * as React from 'react';
import ActionMenu from './components/ActionMenu/ActionMenu';
import Display from './components/Display/Display';

class Timer extends React.Component {
    public render() {
        return (
            <div className="container">
                <div className="box">
                    <div className="columns"><Display /></div>
                    <div className="columns"><ActionMenu /></div>
                </div>
            </div>
        );
    }
}

export default Timer;