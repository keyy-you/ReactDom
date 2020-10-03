import React from "react";
import "./styles.css";
import Navbar from "./Page/Navbar";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailUser from "./Page/DetailUser";
import ProtectedRoute from "./Component/ProtectedRoute";
import ProtectedUserLogin from "./Component/ProtectedUserLogin";
import Login from "./Page/Login";
import Register from "./Page/Register";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/">
            <Navbar>
              <Home />
            </Navbar>
          </ProtectedRoute>
          <Route path="/about">
            <Navbar>
              <About />
            </Navbar>
          </Route>
          <Route path="/contact">
            <Navbar>
              <Contact />
            </Navbar>
          </Route>
          <Route path="/DetailUser/:id">
            <Navbar>
              <DetailUser />
            </Navbar>
          </Route>
          <ProtectedUserLogin path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
