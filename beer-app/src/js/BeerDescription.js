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
                        <span className='ibu'>IBU: {this.props.ibu} </span>
                        <span className='abv'>ABV: {this.props.abv} </span>
                        <span className='ebc'>EBC: {this.props.ebc} </span>
                        <span className='ph'>Ph: {this.props.ph} </span>
                    </div>
                    <span className="description">{this.props.description}</span>
                    <button className='closeBtn' onClick={this.props.show}>Close</button>
                </div>
            </div>
        )
    }
}
