import * as React from 'react';

class ActionMenu extends React.Component {
    public render() {
        return (
            <div className="field has-addons">
                <p className="control">
                    <button className="button is-primary">
                        <span className="icon">
                            <i className="fas fa-play" />
                        </span>
                        <span>Start</span>
                    </button>
                </p>
                <p className="control">
                    <button className="button">
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
}

export default ActionMenu;