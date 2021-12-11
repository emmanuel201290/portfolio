import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { AboutScreen } from '../ui/AboutScreen';
import { OffertScreen } from '../ui/OffertScreen';
import { MenuScreen } from '../ui/MenuScreen';
import { HomeScreen } from '../ui/HomeScreen';
import { ProjectScreen } from '../ui/ProjectScreen';
import { useState } from 'react';
import { AdrlScreen01, AdrlScreen02 } from '../../projects/AdrlScreen.js';
import { AnimatePresence } from 'framer-motion';

export const PortfolioRouter = () => {
  const [flg, setFlg] = useState(false);
  const location = useLocation();

  return (
    <div className="portfolio__main">
      <div className="portfolio__container">
        <div className="portfolio__container-body">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path="/portfolio" component={HomeScreen} />
              <Route path="/about" component={AboutScreen} />
              <Route path="/contact" component={OffertScreen} />
              <Route exact path="/project" render={(props) => <ProjectScreen {...props} setFlg={setFlg} flg={flg} />} />
              <Route exact path="/review" component={AdrlScreen01} />
              <Route exact path="/adrl02" component={AdrlScreen02} />
            </Switch>
          </AnimatePresence>

          <AnimatePresence exitBeforeEnter>
            <Switch exitBeforeEnter location={location} key={location.key}></Switch>
          </AnimatePresence>
        </div>
        <div className="portfolio__container-navbar">
          <hr className="portfolio__container-separator" />
          <div className="portfolio__container-menu">
            <p className="portfolio__container-title">Emmanuel Martinez</p>
            <MenuScreen />
          </div>
        </div>
      </div>

      <footer className="portfolio__footer">
        <h3>Developed by Emmanuel Martinez &copy; 2021</h3>
        <p>
          "Measuring the progress of software development by lines of code is like measuring the progress of the
          construction of an airplane by its weight" <br />
          -- Bill Gates
        </p>
        <br />
      </footer>
    </div>
  );
};
