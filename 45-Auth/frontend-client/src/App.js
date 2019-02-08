import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component{
  state = {
    currentUser: null,
    loading: true
  }

  handleLoginSubmit = (username, password) => {
    fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({
          username:username,
          password:password
        })
    })
    .then(res =>res.json())
    .then(data => {
      if(data.error){
        console.log(data)
        alert('Incorrect username or password')
      }else{
        console.log(data)
        this.setState({currentUser: data.user })
        localStorage.setItem("token", data.token)
      }
    })
  };

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/profile`, {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentUser: data,
          loading:false
        })
      })
    }else{
      this.setState({loading: false})
    }
  }

  handleLogOut = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear()
  }

  render(){
    return (
      <Fragment>
        <Nav logged_in={this.state.currentUser} onLogOut={this.handleLogOut}/>
        {!this.state.loading ? <Switch>

          <Route exact path="/" render={() => <Redirect to="/profile" />} />

          <Route exact path="/profile" render={() => {
            return this.state.currentUser ? <Profile user={this.state.currentUser}/> : <Redirect to='/login'/>
          }} />

          <Route exact path="/login" render={() => {
            return this.state.currentUser ? <Redirect to='/profile'/> : <LoginForm onLogIn={this.handleLoginSubmit}/>
          }} />

          <Route component={NotFound} />

        </Switch> : null }
      </Fragment>
    )
  }

}

export default withRouter(App)
