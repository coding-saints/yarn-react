import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'

const Routes = () => (
  <Router>
    <div className="routes-wrapper">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/form">Contact</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Layout}/>
      <Route path="/about" component={About}/>
      <Route path="/forms" component={Home}/>
    </div>
  </Router>
)


export default Routes