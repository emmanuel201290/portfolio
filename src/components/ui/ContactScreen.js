import React from 'react';
import {
  IconExpress,
  IconGithub,
  IconHeroku,
  IconJava,
  IconJavaScript,
  IconMongo,
  IconMysql,
  IconNode,
  IconPhp,
  IconReact,
  IconSass,
} from './Icon';
import { ImNpm, FaNodeJs } from 'react-icons/all';
/**https://www.vectorlogo.zone/logos/mongodb/index.html */
export const ContactScreen = () => {
  return (
    <div className="contact__container">
      <h1> You know my skills! </h1>

      <p className="contact__text-skills">
        I am a person who can adjust to any programming language and I try to do my best to fulfill the requested
        projects, if you are looking for a committed, self-taught person with a high level of responsibility then you
        can contact me.
      </p>

      <hr style={{ width: '33vw' }} />

      <div className="contact__container-my-skills">
        <div>
          <h5>Core technologies</h5>
          <ul>
            <li>JAVA 6</li>
            <li>JAVASCRIPT</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>PHP</li>
            <li>MONGODB</li>
            <li>MYSQL</li>
          </ul>
        </div>
        <div className="contact__container-tools">
          <h5>Tools Using</h5>
          <ul>
            <li>REACT JS</li>
            <li>EXPRESS JS</li>
            <li>GITHUB</li>
            <li>HEROKU</li>
          </ul>
        </div>
      </div>

      <hr style={{ width: '33vw' }} />
      <div className="contact_Icon">
        <IconJava />
        <IconReact />
        <IconGithub />
        <IconMysql />
        <IconSass />
        <IconNode />
        <IconMongo />
        <IconHeroku />
        <IconExpress />
        <IconPhp />
        <IconJavaScript />
      </div>
    </div>
  );
};
