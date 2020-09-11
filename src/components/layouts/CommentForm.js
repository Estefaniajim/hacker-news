import React, { Component } from "react";
import Threads from "./Threads";
import {Link} from "react";


export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        name: "",
        message: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });

    // persist the comments on server
    let { comment } = this.state;
    fetch("http://localhost:7777", {
      method: "post",
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {
          // add time return from api and push comment to parent state
          comment.time = res.time;
          this.props.addComment(comment);

          // clear the message box
          this.setState({
            loading: false,
            comment: { ...comment, message: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Something went wrong while submitting form.",
          loading: false
        });
      });
  }

  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }


 

  render() {

    return (
   
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            title
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className="form-control"
              placeholder="Your Name"
              name="name"
              type="text"
            />
          </div>
          <div className="form-group">
            url
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className="form-control"
              placeholder="Your Name"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            text
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder=" Your Comment"
              name="message"
              rows="5"
            />
          </div>

          
    

          <div className="form-group">
            <button className="btn btn-primary"  >
              Submit &#10148;
            </button>
          </div>
          <Threads message={this.state.comment.name}/>
          <div>
          
          Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.
          
          You can also submit via bookmarklet.
                  </div>
        </form>
      
       
    
    );
  }
}