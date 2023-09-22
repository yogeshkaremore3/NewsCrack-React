// import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";

import Navbar from "./components/Navbar";

import News from "./components/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';




export default class App extends Component {


  pagesize=6;

  apikey=process.env.REACT_APP_API




  state={

    progress:0,
    country:'in'
  }

  setProgress=(progress)=>{

this.setState({progress:progress});

  }


  setCountry=(countryx)=>{
    
  
    this.setState({country:countryx});

  }

  

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar setCountry={this.setCountry} />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

          <Routes>

            <Route
              exact
              path="/"
              element={
                <>
                <News apikey={this.apikey} progress={this.setProgress}
                  key="generals"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category={"general"}
                />

                <Navbar setCountry={this.setCountry} />

                </>
              }


            />
            <Route
              exact
              path="/General"
              element={
                <News apikey={this.apikey} progress={this.setProgress}
                  key="general"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News apikey={this.apikey} progress={this.setProgress}
                  key="business "
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News apikey={this.apikey} progress={this.setProgress}
                  key="entertainment"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News apikey={this.apikey} progress={this.setProgress}
                  key="health"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News apikey={this.apikey} progress={this.setProgress}
                  key="science"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News apikey={this.apikey} progress={this.setProgress}
                  key="sports"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News apikey={this.apikey} progress={this.setProgress}
                  key="technology"
                  pagesize={this.pagesize}
                  country={this.state.country}
                  category={"technology"}
                />
              }
            />{" "}
            key=" "
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
