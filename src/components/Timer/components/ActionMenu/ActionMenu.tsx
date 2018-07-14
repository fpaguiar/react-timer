import * as React from 'react';
import { connect } from 'react-redux';
import { startCountDown, updateCountValue } from './../../../../actions';

import './ActionMenu.css';

interface IProps {
    startCountDown: (x: boolean) => object
    updateCountValue: (x: number) => object
};

class ActionMenu extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.handleStartCountDown = this.handleStartCountDown.bind(this);
        this.handlePauseCountDown = this.handlePauseCountDown.bind(this);
        this.handleUpdateCountValue = this.handleUpdateCountValue.bind(this);
    }

    public render() {
        return (
            <div className="control">
                <div className="button button-start" onClick={this.handleStartCountDown}>
                    <i className="fas fa-play" />
                </div>
                <div className="button button-stop" onClick={this.handlePauseCountDown}>
                    <i className="fas fa-stop" />
                </div>
                <div className="button button-reset" onClick={this.handleUpdateCountValue}>
                    <i className="fas fa-sync-alt" />
                </div>
            </div>
        );
    }

    private handleStartCountDown() {
        return this.props.startCountDown(true);
    }

    private handlePauseCountDown() {
        return this.props.startCountDown(false);
    }

    private handleUpdateCountValue() {
        return this.props.updateCountValue(0);
    }
}

function mapStateToProps(state: any) {
    return state;
}

export default connect(mapStateToProps, { startCountDown, updateCountValue })(ActionMenu);