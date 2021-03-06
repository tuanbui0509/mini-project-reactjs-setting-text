import React, { Component } from 'react';
class Result extends Component {

    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize:this.props.size
        };
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : {this.props.color} - Font-size: {this.props.size}px</p>
                <div id="content" style={this.setStyle()}>
                    Nội dung setting
                </div>
            </div>
        );
    }
}

export default Result;
