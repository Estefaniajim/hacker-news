import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  const initialValues = {
    title: "",
    body: "",
    posts: []
  };

  const [values, setValues] = useState(initialValues || {});

  const getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        setPosts(data);
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  const handleChange = event => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
};

  const submit = (event) => {
    event.preventDefault();
    const payload = {
      title: values.title,
      body: values.body
    };
    console.log(payload)

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        resetUserInputs();
        getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  const resetUserInputs = () => {
    setTitle('');
    setBody('');
  };

  const displayBlogPost = (posts) => {
   
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

    return(
      <div className="app">
        <h5>Add Comment</h5>
        <form onSubmit={e => submit(e)}>
          <div className="form-input">
            <input 
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              placeholder="body"
              name="body"
              cols="30"
              rows="10"
              onChange={handleChange}
            >
              
            </textarea>
          </div>

          <button>Submit</button>
        </form>

        <div className="blog-">
         
        </div>
       {displayBlogPost(posts)}
      </div>
    );
}


export default CommentForm;