import React from 'react';
import './JapaneeLogo.css'; // make sure this file exists

const JapaneeLogo = () => {
  return (
    <div className="japanee-logo">
      <h1 className="logo-text">
        Japa
        <span className="red-text">ne</span>
        <span className="red-text last-e-wrapper">
          e
          <span className="tag swing">STYLE</span>
        </span>
      </h1>
    </div>
  );
};

export default JapaneeLogo;