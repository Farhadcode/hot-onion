
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
