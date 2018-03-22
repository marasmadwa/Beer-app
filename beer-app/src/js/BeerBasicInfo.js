import React from 'react';

export default class BeerBasicInfo extends React.Component {
    render() {
        return (
            <div className = 'basicInfo'>
                <img className='beerImage' src={this.props.img}/>
                <p className='beerName'> {this.props.name}</p>
                <p className='beerTagline'> {this.props.tagline}</p>
                <button className='readMoreBtn' onClick={this.props.show}>Read more</button>
            </div>
        )
    }
}