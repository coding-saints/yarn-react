
import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from 'muicss/lib/react/appbar'


export default class Layout extends Component {
    render() {
        return(
            <div id="main">
                <Header />
                 <Container className="layout-content">
                
               
             
                <h1>Main Page for Yarn/React setup</h1>
               

           
              </Container>
                 <Container className="mui--z5">
                
               
              
                <h1>Main Page for Yarn/React setup</h1>
               

              
              </Container>
                 <Container>
                
              
              
                <h1>Main Page for Yarn/React setup</h1>
               

        
              </Container>
                <Footer />
               
                
            </div>
        )
    }
}
