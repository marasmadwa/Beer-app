import React from 'react';


class Beers extends React.Component {
    render() {
        return (
            <div className='col col-1-3'>
                <div>
                    <img className='beerImage' src={this.props.data.image_url}/>
                </div>
                {this.props.data.name}
            </div>
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
                    <h1><span className='beerWord'>BEER</span><span className='guruWord'>GURU</span></h1>
                </div>
                <div className='row'>
                    {beers}
                </div>
            </div>

        )
    }
}