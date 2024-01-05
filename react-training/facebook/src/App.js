// App.js

import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content  from './Components/Content';
import Footer from './Components/Footer';

const App = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (postText.trim() !== '') {
      setPosts([...posts, postText]);
      setPostText('');
    }
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
      <div>
        {posts.map((post, index) => (
          <span key={index}>{post}</span>
        ))}
      </div>
    </div>
  );
};

export default App;
