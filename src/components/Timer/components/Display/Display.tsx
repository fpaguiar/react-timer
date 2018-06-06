import * as React from 'react';
import { connect } from 'react-redux';
import { startCountDown, updateCountValue } from '../../../../actions';

interface IProps {
    countValue: number,
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
        if (this.props.countDownStarted && this.props.countValue > 0) {
            setTimeout(() => {
                this.props.updateCountValue(this.props.countValue - 1);
            }, 1000);
        } else {
            this.props.startCountDown(false);
        }
    }

    public render() {
        return (
            <div className="field">
                <input type="text" className="input" value={this.props.countValue} onChange={this.handleCountValueChange}/>
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