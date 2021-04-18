import React, { Component } from 'react';
class SizeSetting extends Component {
    DecreaseSize() {
        if (this.props.size > 5) {
            this.props.onReceiveSize(this.props.size - 2)
        }
    }

    IncreaseSize() {
        if (this.props.size < 49) {
            this.props.onReceiveSize(this.props.size + 2)
        }
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.size}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={() => this.DecreaseSize()}>Giảm</button>&nbsp;
                <button type="button" className="btn btn-success" onClick={() => this.IncreaseSize()}>Tăng</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
