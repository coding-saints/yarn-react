
import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'


export default class Layout extends Component {
    render() {
        return(
            <div>
                <Header />
                
                <div className="container">
                <h1>Main Page for Yarn/React setup</h1>

                </div>
                <Footer />
            </div>
        )
    }
}
