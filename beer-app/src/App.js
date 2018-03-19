import React from 'react';
import BeerGuru from './js/BeerGuru.js'


export default class App extends React.Component {
    render() {
        return (
            <section className='mainLayout'>
                <div className='container'>
                    <BeerGuru/>
                </div>
            </section>
        );
    }
}
