import * as moment from 'moment';
import * as React from 'react';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { startCountDown, updateCountValue } from '../../../../actions';

import './Display.css';

interface IProps {
    countValue: any,
    countDownStarted: boolean,
    startCountDown: any,
    updateCountValue: any
};

class Display extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.handleCountValueChange = this.handleCountValueChange.bind(this);
    }

    public componentDidUpdate() {
        const currentValue = moment(this.props.countValue, 'HH:mm:ss');

        if (this.props.countDownStarted && currentValue.isValid()) {
            setTimeout(() => {
                return this.props.countDownStarted && this.props.updateCountValue(currentValue.subtract(1, 'second'));
            }, 1000);
        } else {
            this.props.startCountDown(false);
        }
    }

    public render() {
        const formattedValue = this.props.countValue.format('HH:mm:ss');
        return (
            <div className="display">
                <InputMask mask="99:99:99" maskChar="0" className="input" value={formattedValue} onChange={this.handleCountValueChange} />
                {/* <input type="text" className="input" value={this.props.countValue} onChange={this.handleCountValueChange}/> */}
            </div>
        );
    }

    private handleCountValueChange(event: any) {
        this.props.updateCountValue(event.target.value);
    }
}

function mapStateToProps(state: any) {
    return state;
}

export default connect(mapStateToProps, { startCountDown, updateCountValue })(Display);