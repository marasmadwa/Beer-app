import React from 'react';
import BeerBasicInfo from './BeerBasicInfo.js';
import BeerDescription from './BeerDescription.js';
// import InfiniteScroll from 'react-infinite-scroller';


class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    showBeerDescription = () => {
        if (this.state.open === false) {
            this.setState({
                open: true,
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
                                 food_pairing={this.props.data.food_pairing}/>
            </div>

        )
    }
}


export default class BeerGuru extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            activePage: 1,
            showItems: 20
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
                // console.log(data);
                this.setState({
                    beers: data
                })
            });
    }

    handleShowMore = () => {
        this.setState({
            showItems: this.state.showItems >= this.state.beers.length ?
                this.state.showItems : this.state.showItems + 1
        })
    };

    render() {

        const beers = this.state.beers.slice(0, this.state.showItems).map
        (beer => {
            return <Beers key={beer.id} data={beer}/>
        });

        return (
            <div className='beerBox'>
                <div className='beerGuruTitle'>
                    <h1><span className='beerWord'>BEER</span><span className='guruWord'>GURU</span></h1>
                </div>
                <div className='row'>
                    {/*<InfiniteScroll*/}
                        {/*pageStart={0}*/}
                        {/*loadMore={this.handleShowMore}*/}
                        {/*loader={<div className="loader" key={0}>Loading ...</div>}*/}
                    {/*>*/}
                        {/*{beers}*/}
                    {/*</InfiniteScroll>*/}
                    {beers}
                    <div className='loader'>Loading <span className='spinner'>.</span></div>
                </div>
                <button className='showMoreBeers' onClick={this.handleShowMore}>More beers!<span>))</span></button>
            </div>

        )
    }
}

