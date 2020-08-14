import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routers } from './routers/Routers'
import Header from '../containers/header/Header'

export default class AppRouters extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
        <Switch>
          {routers.map(({ path, component: Component }, index) => (
          <Route exact path={path} key={index}>
            <Component />
          </Route>
          ))}        
        </Switch>
      </BrowserRouter>
    )
  }
}
