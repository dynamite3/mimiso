
import react, { useState } from "react";
import { Route,Switch } from "react-router";
import styled from "styled-components";

import NavBar from "./NavBar";

import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage"


import { Container } from "react-bootstrap";
import ContentPage from "../Pages/ContentPage";
import AboutPage from "../Pages/AboutPage"
import { PrivateRoute } from "./PrivateRoute";

export const apiendpoint="http://localhost:6969";


function MainContent(){
    return(
        <MainContentStyled>
            
            <div className="main">
                <Container fluid>
                <Switch>
                    <Route path="/" exact><LoginPage/></Route>
                    <Route path="/login" exact><LoginPage/></Route>
                    <Route path="/about" exact><AboutPage/></Route>
                    <Route path="/contact" exact><ContentPage/></Route>
                    <PrivateRoute exact path="/content"><ContentPage/></PrivateRoute>
                </Switch>
                </Container>
            </div>    
        </MainContentStyled>
    )
  }
  
  const MainContentStyled=styled.div`
    .main{ 
        text-align: center;
    }
  `;
  
  export default MainContent;