import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from './Home'
import NavBar from './NavBar'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Messages from './Messages'

function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
        </Switch>
      </div>
    )
  }
  
export default App