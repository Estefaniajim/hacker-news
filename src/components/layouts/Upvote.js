import React, { Component, useState } from 'react';
import {useAuth0} from "@auth0/auth0-react";

const Upvote = () => {
  const [vote, setVote] = useState(0)
  const { user } = useAuth0();
  return (
    user ?
      <div>
        <h4>{vote}</h4>
        <button 
          className={vote === 1 ? 'active' : null}
          onClick={vote === 1 ? vote => setVote(0) : vote => setVote(1)}
        >
          Upvote  
        </button>
        <button 
          className={vote === -1 ? 'active' : null}
          onClick={vote === -1 ? vote => setVote(0) : vote => setVote(-1)}
        >
          Downvote
        </button>
      </div>
      : null
    );
  };
// };

export default Upvote;