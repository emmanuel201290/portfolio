import React from 'react';
import { NavLink } from 'react-router-dom';
import { data } from './data.js';

export const ProjectScreen = ({ setFlg }) => {
  return (
    <div className="project__container animate__animated animate__fadeIn">
      <h1>My Personal Projects !</h1>
      {data.map((project) => (
        <ContentScreen data={project} setFlg={setFlg} />
      ))}
    </div>
  );
};

const ContentScreen = ({ data, setFlg }) => {
  return (
    <>
      <h3>{data.title}</h3>

      <div className="project__information">
        
        <p>{data.content}</p>
        {
          data.title!=="SIDUNEA WORLD" &&
          <a href={data.link} target="noopener" rel="noopener" >
          Let me show you the [{data.title}]
         </a>
        }
         </div>
    </>
  );
};
