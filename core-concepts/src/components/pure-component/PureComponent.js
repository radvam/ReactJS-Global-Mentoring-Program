import React from "react";

class PureComponent extends React.PureComponent  {
    render() {
        return <h3>{this.props.text}</h3>;
    }
}

export default PureComponent;
