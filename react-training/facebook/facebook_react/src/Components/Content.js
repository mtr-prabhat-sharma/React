import React, { Component, useState } from 'react';
import '../style.css';
import icon from '../thumbs-up.svg';
class Content extends Component {
  constructor() {
    super();

    this.state = {
      postContent: '',
      postedItems: [],
      showPosted: false,
      likes:0,
    };
  }
  
  setPostContent = (event) => {
    this.setState({ postContent: event.target.value });
  };

  
  handlePost = () => {
    const { postContent, postedItems } = this.state;
    this.setState({
      postedItems: [...postedItems, postContent],
      postContent: '', 
      showPosted: true,
    });
  };

  increaseLikes = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  };

  render() {
    const { postContent, postedItems, showPosted, likes } = this.state;

    return (
      <>
      <div className='textarea-main-container'>
        <div>
          <textarea
            type="text"
            placeholder="What's on your mind"
            value={postContent}
            onChange={this.setPostContent}
          />
          <button className="btn btn-primary" onClick={this.handlePost} style={{float:'right'}}>Post</button>
          <button className="btn btn-success" onClick={this.increaseLikes} style={{float:'right', marginRight:'5px'}}><img src={icon} alt='icon' />{likes}</button>
        </div>
        { showPosted && (
            <div className='post-span'>
            {postedItems.map((item) => (
              <span>{item}</span>
            ))}
          </div>
        )}
      </div>
      </>
    );
  }
}

export default Content;
