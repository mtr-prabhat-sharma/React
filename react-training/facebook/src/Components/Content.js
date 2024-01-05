import React, { useState } from 'react';
import '../style.css';

const Content = () => {
  const [postContent, setPostContent] = useState('');
  const [postedItems, setPostedItems] = useState([]);

  const handlePost = () => {
    if (postContent.trim() !== '') {
      setPostedItems([...postedItems, postContent]);
      setPostContent('');
    }
  };

  return (
    <div className='textarea-main-container'>
      <div>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind"
          style={{ width: '100%', marginBottom: '10px' }}
        ></textarea>
        <br />
        <button onClick={handlePost} className="btn btn-primary">
          Post
        </button>
      </div>
      <div>
        {postedItems.map((item, index) => (
          <span key={index} style={{ display: 'block', margin: '10px 0' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};


export default Content;
