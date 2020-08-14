import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routers } from './routers/Routers'
import ProjectCarsHome from '../containers/ProjectCarsHome'

export default class AppRouters extends Component {
  render() {
    return (
      <BrowserRouter>
        <ProjectCarsHome>
          <Switch>
            {routers.map(({ path, component: Component }, index) => (
            <Route exact path={path} key={index}>
              <Component />
            </Route>
            ))}        
          </Switch>
        </ProjectCarsHome>
      </BrowserRouter>
    )
  }
}
