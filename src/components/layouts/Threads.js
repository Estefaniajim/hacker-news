import React, { Component } from 'react';
import CommentForm from './CommentForm';
import {useAuth0} from "@auth0/auth0-react";


class Threads extends React.Component {

render(){
  return(
      <div> 
          <text>{this.props.message}</text>
      </div>

  )
}
}

export default Threads