import React from 'react';
import ProfileCardDesign from './ProfileCardDesign';
import './ProfileCard.css';

const App = () => {
  return (
    <div className="profile-container">
      <h2 className="topic">My Profile</h2>
      <ProfileCardDesign />
    </div>
  );
};

export default App;
