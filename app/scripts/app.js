var mountNode = document.getElementById("content"),
    mountNodeHeader = document.getElementById("header_container"),
    mountNodeFooter = document.getElementById("footer_container");

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Header from './modules/default/Header'
import Footer from './modules/default/Footer'
import About from './modules/section/About'
import Repos from './modules/section/Repos'


render((
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            {/* add the routes here */}
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}/>
        </Route>
    </Router>
), document.getElementById('container'));

render(<Footer/>, mountNodeFooter);
