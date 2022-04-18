import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Frontpage from './components/Frontpage';
import './components/styles/index.css'

ReactDOM.render(
    <>
        <div class="page-wrap">
            <Frontpage />
            <About />
        </div>
    </>

    , document.getElementById('app'));