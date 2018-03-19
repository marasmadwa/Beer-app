import React from 'react';


class Beers extends React.Component {
    render() {
        return (
            <li className='beerType'>
                {this.props.data.name}
                <div>
                    <img className='beerImage' src={this.props.data.image_url}/>
                </div>
            </li>
        )
    }
}


export default class BeerGuru extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        };
        fetch(`https://api.punkapi.com/v2/beers`)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('err');
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    beers: data
                })
            });
    }

    render() {
        const beers = this.state.beers.map(beer => {
            return <Beers key={beer.id} data={beer}/>
        });
        return (
            <div className='beerBox'>
                <div className='beerGuruTitle'>
                    <h1>BEERGURU</h1>
                </div>
                <ul className='beerList'>
                    {beers}
                </ul>
            </div>

        )
    }
}