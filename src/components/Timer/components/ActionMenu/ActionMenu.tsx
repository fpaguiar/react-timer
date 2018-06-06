import * as React from 'react';
import { connect } from 'react-redux';
import { startCountDown,  } from './../../../../actions';

interface IProps {
    startCountDown: (x: boolean) => object
    stopCountDown: () => void
};

class ActionMenu extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.handleStartCountDown = this.handleStartCountDown.bind(this);
        this.handlePauseCountDown = this.handlePauseCountDown.bind(this);
    }
    
    public render() {
        return (
            <div className="field has-addons">
                <p className="control">
                    <button className="button is-primary" onClick={this.handleStartCountDown}>
                        <span className="icon">
                            <i className="fas fa-play" />
                        </span>
                        <span>Start</span>
                    </button>
                </p>
                <p className="control">
                    <button className="button" onClick={this.handlePauseCountDown}>
                        <span className="icon">
                            <i className="fas fa-pause" />
                        </span>
                        <span>Pause</span>
                    </button>
                </p>
                <p className="control">
                    <button className="button is-info">
                        <span className="icon">
                            <i className="fas fa-sync" />
                        </span>
                        <span>Reset</span>
                    </button>
                </p>
            </div>
        );
    }

    private handleStartCountDown() {
        return this.props.startCountDown(true);
    }

    private handlePauseCountDown() {
        return this.props.startCountDown(false);
    }
}

function mapStateToProps(state: any) {
    return state;
}

export default connect(mapStateToProps, {startCountDown})(ActionMenu);