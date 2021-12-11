import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutScreen } from '../ui/AboutScreen';
import { OffertScreen } from '../ui/OffertScreen';
import { MenuScreen } from '../ui/MenuScreen';
import { HomeScreen } from '../ui/HomeScreen';
import { ProjectScreen } from '../ui/ProjectScreen';
import { useState } from 'react';
import { ReviewProject } from '../ui/ReviewProject';
import { useEffect } from 'react';

export const PortfolioRouter = () => {
  const [flg, setFlg] = useState(false);

  return (
    <Router>
      <Route exact path="/review" render={(props) => <ReviewProject {...props} setFlg={setFlg} flg={flg} />} />
      {!flg && (
        <div className="portfolio__main">
          <>
            <div className="portfolio__container">
              <div className="portfolio__container-body">
                <Switch>
                  <Route exact path="/" component={HomeScreen} />
                  <Route path="/about" component={AboutScreen} />
                  <Route path="/contact" component={OffertScreen} />
                  <Route
                    exact
                    path="/project"
                    render={(props) => <ProjectScreen {...props} setFlg={setFlg} flg={flg} />}
                  />
                </Switch>
              </div>
              <div className="portfolio__container-navbar">
                <hr className="portfolio__container-separator" />
                <div className="portfolio__container-menu">
                  <p className="portfolio__container-title">Emmanuel Martinez</p>
                  <MenuScreen />
                </div>
              </div>
            </div>
          </>

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
      )}
    </Router>
  );
};
