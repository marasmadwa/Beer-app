import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import BeerDescription from './BeerDescription.js'


class Beers extends React.Component {
    render() {
        return (
            <div className='col col-1-3'>
                <div>
                    <img className='beerImage' src={this.props.data.image_url}/>
                </div>
                <p className='beerName'> {this.props.data.name}</p>
                <p className='beerTagline'> {this.props.data.tagline}</p>
            </div>
        )
    }
}


export default class BeerGuru extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            loadMore: this.props.loadMore,
            // render: ''
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

    // handleBeerClick = () => {
    //         this.setState({
    //             render: BeerDescription
    //         })
    // };


    render() {
        const beers = this.state.beers.map(beer => {
            return <Beers key={beer.id} data={beer} onClick={this.handleBeerClick}/>
        });

        let beersList = beers.slice(0,20);

        return (
            <div className='beerBox'>
                <div className='beerGuruTitle'>
                    <h1><span className='beerWord'>BEER</span><span className='guruWord'>GURU</span></h1>
                </div>
                <div className='row'>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={beers.slice(20,25)}
                        hasMore={true || false}
                        loader={<div className="loader" key={0}><span className='loadWord'> Load</span><span className='ingWord'>ing</span><div className='spinner'>.</div></div>}
                        useWindow={false}
                    >
                        {beersList}
                    </InfiniteScroll>
                    {/*<BeerDescription description = {this.state.render}/>*/}
                </div>
            </div>

        )
    }
}
