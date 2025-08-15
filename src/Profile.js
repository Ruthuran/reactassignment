import React from 'react';

const ProfileCard = ({ name, description, image, background }) => {
  return (
    <div
      className="card text-center shadow-sm"
      style={{
        width: '20rem',
        margin: '8px', // reduced margin for tighter layout
        borderRadius: '10px',
        overflow: 'hidden'
      }}
    >
      <div
        className="card-img-top"
        style={{
          height: '140px', // slightly shorter to reduce vertical space
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="card-body" style={{ paddingTop: '40px', paddingBottom: '15px' }}>
        <div
          className="rounded-circle mx-auto"
          style={{
            width: '90px',
            height: '90px',
            overflow: 'hidden',
            marginTop: '-65px', // pulls image up closer to background
            border: '4px solid white'
          }}
        >
          <img
            src={image}
            alt={name}
            className="img-fluid"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <h5 className="card-title mt-3 mb-2">{name}</h5>
        <p className="card-text text-muted" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>
          {description}
        </p>

        <div>
          <i className="fab fa-facebook fa-lg mx-2 text-primary"></i>
          <i className="fab fa-linkedin fa-lg mx-2 text-primary"></i>
          <i className="fab fa-dribbble fa-lg mx-2 text-danger"></i>
          <i className="fab fa-twitter fa-lg mx-2 text-info"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
