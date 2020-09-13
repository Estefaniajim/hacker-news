import React, { Component } from 'react';
import CommentForm from './CommentForm';
import {useAuth0} from "@auth0/auth0-react";

const Threads = props => {
  const { user } = useAuth0();
  return(
    user ?
    <div> 
      <text>{props.message}</text>
    </div> : null
  );
};

export default Threads