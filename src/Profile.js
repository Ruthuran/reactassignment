import React from 'react';

const ProfileCard = ({ name, description, image, background }) => {
  return (
    <div className="card text-center shadow-sm" style={{ width: '20rem', margin: '10px' }}>
      <div
        className="card-img-top"
        style={{
          height: '100px',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="card-body">
        <div
          className="rounded-circle mx-auto"
          style={{
            width: '100px',
            height: '100px',
            overflow: 'hidden',
            marginTop: '-50px',
            border: '5px solid white',
          }}
        >
          <img
            src={image}
            alt={name}
            className="img-fluid"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <h5 className="card-title mt-3">{name}</h5>
        <p className="card-text text-muted">{description}</p>
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
