import React, { Component } from 'react';
import Location from "./location";
const styl = {
    background: '#fff',
    border: '1px solid black',
    margin: '15px'
}
class ProductTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div style={styl}>
                <img src={this.props.item.picture.thumbnail} alt=""/>
                <h3>
                    {  this.props.item.name.first + ' ' + this.props.item.name.last}
                </h3>
                <h6>
                    { this.props.item.cell }
                </h6>
                <p>{ this.props.item.email }</p>
                {Object.entries(this.props.item.location).map((tag, i) =>

                    <Location single={tag}
                              key={i}
                    />
                )}


            </div>
        )
    }

}
function ProductTile(props) {

}

export default ProductTile