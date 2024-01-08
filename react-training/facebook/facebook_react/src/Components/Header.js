
import React, { useState, useEffect } from 'react';
import '../style.css';
import logo from '../logo.svg'; 

const Header = () => {

  const [notification, updtNotification] = useState(4);

  function updateNotifications() {
    updtNotification(notification + 1)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updtNotification((prevNotification) => prevNotification + 1);
    }, 3000);
  });

  return (
    <header className='headerClass'>
      <img src={logo} alt='logo' />
      <h1>React Facebook</h1>
      <img src={logo} alt='logo' />
      <button type="button" class="btn btn-primary" style={{ marginLeft: 'auto' }} onClick={updateNotifications}>Notifications <span class="badge bg-secondary">{notification}</span></button>
    </header>
  );
};

export default Header;
