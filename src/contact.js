import React, { Component } from 'react';

import './users.css';
class ProductTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={'users-row__user'} onClick = {this.props.handler}>
                <img src={ this.props.item.picture.thumbnail } alt=""/>
                <h3>
                    {  this.props.item.name.last + ' ' + this.props.item.name.first  }
                </h3>
            </div>
        )
    }

}
function ProductTile(props) {

}

export default ProductTile