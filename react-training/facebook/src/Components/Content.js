import React, { Component } from 'react';
import '../style.css';


class Content extends Component {
  constructor() {
    super();

    this.state = {
      postContent: '',
      postedItems: [],
      showPosted: false,
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

  render() {
    const { postContent, postedItems, showPosted } = this.state;

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
          <button onClick={this.handlePost} style={{float:'right'}}>Post</button>
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
