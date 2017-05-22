import React, {Component} from 'react'
import {render} from 'react-dom'
import Routes from './Routes'
import './scss/styles.scss'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'


render(
     <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/form">Contact</Link></li>
      </ul>
 </div>
      <hr/>

      <Route exact path="/" component={Layout}/>
      <Route path="/about" component={About}/>
      <Route path="/forms" component={Home}/>
   
  </Router>,
    document.getElementById('root')
)