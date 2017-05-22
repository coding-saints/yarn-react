
import React, {Component} from 'react'
import Header from './Header'
import Forms from './Forms'
import Footer from './Footer'
import Container from 'muicss/lib/react/appbar'


export default class Layout extends Component {
    render() {
        return(
            
            <div id="main">
              
                <Container className="box-zero">
          
                    <img id="hero" src="../assets/pexels.jpeg"/>
                   
                     </Container>
                 <Container className=" box one mui--z5">
                    <h2>Title of Card</h2>
                    <p>so many ideas to add</p>
               
           
              </Container>
                 <Container className="box two">
            <h2 className="text">Title of Card</h2>
                    <p>so many ideas to add</p>
                
 
              </Container>
              <Forms />
                <Footer />
               
                
            </div>
        )
    }
}
