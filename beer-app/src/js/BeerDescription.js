import React from "react";

export default class BeerDescription extends React.Component {
    render() {
        return this.props.isOpen && (
            <div className='beerDescription'>
                <img className='beerImage' src={this.props.img}/>
                <div className="beerId">
                    <p className='beerName'> {this.props.name}</p>
                    <p className='beerTagline'> {this.props.tagline}</p>
                    <div className='extracts'>
                        <span>IBU: <p>{this.props.ibu}</p> </span>
                        <span>ABV: <p>{this.props.abv}</p> </span>
                        <span>EBC: <p>{this.props.ebc}</p> </span>
                        <span>Ph: <p>{this.props.ph}</p> </span>
                    </div>
                    <span className="description">{this.props.description}</span>
                    <button className='closeBtn' onClick={this.props.show}>Close</button>
                </div>
            </div>
        )
    }
}
