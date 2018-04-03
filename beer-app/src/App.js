import React from 'react';
import BeerGuru from './js/BeerApp.js'


export default class App extends React.Component {
    render() {
        return (
            <section className='mainLayout'>
                <div className='container'>
                    <BeerGuru/>
                </div>
                <footer>&copy; made by <a href="https://github.com/marasmadwa" target="_blank"> marasmadwa</a></footer>
            </section>
        );
    }
}
