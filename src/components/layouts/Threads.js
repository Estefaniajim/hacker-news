import React, { Component } from 'react';
import CommentForm from './CommentForm';



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