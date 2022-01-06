import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../App";

import { createContext, useContext,useEffect } from "react";
import { apiendpoint } from "./MainContent";

export function PrivateRoute({ children, ...rest }) {
  const hastoken = localStorage.getItem('auth-token');
  const myContext = useContext(AppContext);
  // console.log(myContext)

  useEffect(() => {
    myContext.setCurrentUser(localStorage.getItem('current-user'))
    getuserDetails()
  }, [myContext.currentUser])

  function getuserDetails(){
    // console.log("-----")
    // console.log(myContext.currentUser)
    // console.log("-----")
    if(myContext.currentUser)
        {
        fetch(apiendpoint+"/login/getCurrentUser",
        {
            method: "POST",
            headers: { 'Content-Type': "application/json", 'Access-Control-Allow-Origin': "*" },
            body: JSON.stringify(
                {
                    getuser:myContext.currentUser
                }),
        })
        .then((d)=>d.json())
        .then((d)=>myContext.setcur_user(d))
      }
        
  }
    console.log("-----")
    console.log(myContext.cur_user)
    console.log("-----")
  

  return (
    <Route {...rest} render={() => {
      return hastoken !== null && hastoken!=="undefined"
        ?
        children
        :
        <Redirect to={{ pathname: '/login' }} />;
    }}>
    </Route>
  );
}
