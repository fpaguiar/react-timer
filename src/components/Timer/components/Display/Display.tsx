import * as React from 'react';
import { connect } from 'react-redux';
import { updateCountValue } from '../../../../actions';

interface IProps {
    countValue: number,
    updateCountValue: any
};

class Display extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.handleCountValueChange = this.handleCountValueChange.bind(this);
    }

    public render() {
        return (
            <div className="field">
                <input type="text" className="input" value={this.props.countValue || 0} onChange={this.handleCountValueChange}/>
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

export default connect(mapStateToProps, { updateCountValue })(Display);