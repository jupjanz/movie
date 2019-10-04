import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Counter from './components/Counter'
import User from './components/User'
import Home from './components/Home'
import Movie from './components/Movie'


export default class Routes extends Component {
    render() {
        return (
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/counter" component={Counter} />
              <Route exact path="/user" component={User} />
              <Route exact path="/movie" component={Movie} />
          </Switch>
        )
    }
}


