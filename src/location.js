import React, { Component } from 'react';

class Location extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <span>{ this.props.single.join(': ') }</span>

            </div>
        )
    }
}

export default Location