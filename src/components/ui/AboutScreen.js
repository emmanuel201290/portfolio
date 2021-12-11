import React from 'react';
import { IconGmail, IconLinked, IconYahoo } from './Icon';

export const AboutScreen = () => {
  return (
    <div className="about__container animate__animated animate__fadeIn">
      <h1>About me </h1>
      <p className="about__presentation ">
        Hello, my name is Emmanuel Martinez. I am a software engineer with 7 years of experience. I like to solve
        problems and take on some challenges in my life, since in this way I can enrich my knowledge. I like to learn
        something new every day and I am not afraid of making mistakes, since making mistakes is part of our learning. I
        am able to adapt to any work environment and work as a team. I characterize myself for being a person dedicated
        to his work with a lot of desire to improve every day.
      </p>
      <h5>You can contact me here ! 👇</h5>

      <div className="about__iconContact">
        <IconGmail />
        <p>em62826@gmail.com</p>
      </div>

      <div className="about__iconContact">
        <IconYahoo />
        <p>enmanuelmartinez89@gmail.com</p>
      </div>

      <div className="about__iconContact">
        <IconLinked />
        <p>emmanuel.jesusMartinez.link</p>
      </div>
    </div>
  );
};
