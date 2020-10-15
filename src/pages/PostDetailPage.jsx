import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Postdetailpage extends Component {
   
    render() {
       let title=this.props.history.location.aboutProps.title
       let body=this.props.history.location.aboutProps.body

        return (
            <div>
              <Link to="/">
                <button className="btn">Back To Posts </button>
              </Link>
              <h2>{title}</h2>
              <h5>{body}</h5>
            </div>
        )
    }
}
export default Postdetailpage;