import React from 'react';

class SourceFillBigscreen extends React.Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <head className="heading" >{this.props.title}
                    <i className="shanchu fa fa-close" ></i>
                </head>
                <div className="part">
                    <img src={this.props.url} alt="" style={{ width: '100%', height: '100%'}}/>
                </div>
            </div>
        );
    }
};

export default SourceFillBigscreen;