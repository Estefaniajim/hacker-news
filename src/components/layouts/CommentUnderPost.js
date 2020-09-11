import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import CommentForm from './CommentForm';


class CommentUnderPost extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this._offButtonClick = this._offButtonClick.bind(this);
      }
    
      _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }

      _offButtonClick() {
        this.setState({
          showComponent: false,
        });
      }
    
      render() {
        return (
          <div>
            <Button onClick={this._onButtonClick} >Comment</Button>
            {this.state.showComponent ?
               <CommentForm /> :
               
               null
            
            }
          <Button onClick={this._offButtonClick} >Close</Button>
          </div>
        );
      }

    }
export default CommentUnderPost;