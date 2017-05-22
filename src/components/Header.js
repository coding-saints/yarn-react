
import React, {Component} from 'react'
import Appbar from 'muicss/lib/react/appbar'

export default class Header extends Component {
    render() {
        return(
            <div>
            <Appbar>
                
                  <div className="mui--appbar-height mui--appbar-line-height" style={{border: "1px solid #aaa"}}>
          Vertically centered
        </div>
            </Appbar>
            </div>
        )
    }
}
