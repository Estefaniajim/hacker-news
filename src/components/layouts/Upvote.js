import React, { Component } from 'react';
import {useAuth0} from "@auth0/auth0-react";
class Upvote extends Component {
  
  state = { vote: 0, score: 0 }

  

  vote = (type) => {
    this.setState( state => ({
      vote : state.vote === type ? 0 : type
    }))
  }

  
  render() {
    const { vote, score } = this.state;
    //const { user } = useAuth0();
    return (
      <div>
        <h4>{score + vote}</h4>
        <button 
          className={vote === 1 ? 'active' : null}
          onClick={() => this.vote(1)}
        >
          Upvote  
        </button>
        <button 
          className={vote === -1 ? 'active' : null}
          onClick={() => this.vote(-1)}
        >
          Downvote
        </button>
      </div>
    );
  };
};

export default Upvote;