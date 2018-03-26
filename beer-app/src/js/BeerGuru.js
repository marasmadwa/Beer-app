import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import BeerBasicInfo from './BeerBasicInfo.js';
import BeerDescription from './BeerDescription.js';


class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            hide: true
        }
    }

    showBeerDescription = () => {
        if (this.state.open === false) {
            this.setState({
                open: true
            })
        } else {
            this.setState({
                open: false
            })
        }
    };

    render() {
        return (
            <div className='col col-1-3'>
                <BeerBasicInfo show={this.showBeerDescription} img={this.props.data.image_url}
                               name={this.props.data.name} tagline={this.props.data.tagline}/>
                <BeerDescription show={this.showBeerDescription} isOpen={this.state.open}
                                 description={this.props.data.description} img={this.props.data.image_url}
                                 name={this.props.data.name} tagline={this.props.data.tagline} ibu={this.props.data.ibu}
                                 abv={this.props.data.abv} ebc={this.props.data.ebc} ph={this.props.data.ph}
                                 food_pairing={this.props.data.food_pairing} beers = {this.state.beers}/>
            </div>

        )
    }
}


export default class BeerGuru extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
        };

        fetch(`https://api.punkapi.com/v2/beers`)
            .then(response => {
                // console.log(response);
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
                <div className='loader'>Loading <span className='spinner'>.</span></div>
            </div>

        )
    }
}
