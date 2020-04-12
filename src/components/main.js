import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Homepage from './homepage';
import AboutMe from './aboutme';
import Contact from './contact';
import HallOfFame from './halloffame';
import About from './about';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/multimims" component={Homepage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/halloffame" component={HallOfFame} />
    <Route path="/about" component={About} />
  </Switch>
)

export default Main;
