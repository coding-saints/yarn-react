
import React, {Component} from 'react'
import Appbar from 'muicss/lib/react/appbar'


export default class Footer extends Component {
    render() {
        return(
            <Appbar className="footer-box">
            <ul className="social-icons">
  <li className="icon icon--facebook">
    <a href="#">
      <span className="icon__name">Facebook</span>
    </a>
  </li>
  <li className="icon icon--twitter">
    <a href="#">
      <span className="icon__name">Twitter</span>
    </a>
  </li>
  
  <li className="icon icon--instagram">
    <a href="#">
      <span className="icon__name">Instagram</span>
    </a>
  </li>
 
</ul>
            </Appbar>
        )
    }
}
