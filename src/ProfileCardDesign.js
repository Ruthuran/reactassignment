import React from 'react';
import ProfileCard from './Profile';
import './ProfileCard.css';

const ProfileCardDesign = () => {
  const profiles = [
    {
      name: 'Tim Berners-Lee',
      description:
        'Tim Berners-Lee is a British computer scientist who invented the World Wide Web in 1989 while working at CERN. His creation of HTML, HTTP, and the first web revolutionized how we access and share information online.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMzlchhwUvRXF-LEmGeXeF0Gw2aFT_4RGmQ&s',
      background: 'https://wallpaperaccess.com/full/5101318.jpg',
    },
    {
      name: 'John Resig',
      description:
        'John Resig is an American software engineer and entrepreneur, best known as the creator and lead developer of the jQuery JavaScript library. As of 2021, he works as the chief software architect at Khan Academy.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/John_Resig_%284586826039%29.jpg/640px-John_Resig_%284586826039%29.jpg',
      background: 'https://static.vecteezy.com/system/resources/thumbnails/036/227/456/small_2x/ai-generated-nature-landscapes-background-free-photo.jpg',
    },
    {
      name: 'Ethan Marcotte',
      description:
        'Ethan Marcotte is a web designer, speaker, and author. He is perhaps best known for creating responsive web design, which helped the industry discover a new way of designing for the ever-changing web.',
      image: 'https://cdn.prod.website-files.com/5b333bf6a754eaedde792f52/5cabef54506f759af01063f3_ethan-marcotte.png',
      background: 'https://static.vecteezy.com/system/resources/previews/029/771/417/large_2x/epicgraphy-shot-of-rainy-season-background-enjoying-nature-rainfall-and-happy-life-concept-generative-ai-free-photo.jpeg',
    },
    {
      name: 'Ruthuran',
      description:
        'As an aspiring web developer, I am passionate about creating dynamic and responsive web applications. With a strong foundation in HTML, CSS, and JavaScript, I am currently expanding my skillset in React, Node.js, and API integration.',
      image: 'https://img.freepik.com/premium-photo/close-up-cartoon-boy-wearing-glasses-hoodie-generative-ai_900396-54982.jpg',
      background: 'https://images.squarespace-cdn.com/content/v1/5de93a2db580764b4f6963f9/db2e3bb7-ece1-47c1-92a0-7829d015b3d4/Sam+Wilson_New+Zealand.jpeg',
    },
  ];

  return (
    <div className="container text-center">
      <div className="topic-section">
        <h1 className="text-white">PROFILE CARD DESIGN</h1>
      </div>

      <div className="profile-cards-section">
        <div className="row justify-content-center">
          {profiles.map((profile, index) => (
            <div className="col-md-3 d-flex justify-content-center" key={index}>
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCardDesign;
