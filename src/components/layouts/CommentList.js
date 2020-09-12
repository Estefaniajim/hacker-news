import React, { Component } from 'react';
import CommentForm from './CommentForm';



class CommentList extends React.Component {
    state = {
        posts: this.props.posts
    }
    
    displayBlogPost = (posts) => {

        if (!posts.length) return null;
    
    
        return posts.map((post, index) => (
          <div key={index} className="blog-post__display">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ));
      };
}

export default CommentList