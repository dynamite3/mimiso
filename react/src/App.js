import React, { useState, createContext, useContext,useEffect } from "react";

import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent"

export const AppContext = React.createContext();


function App() {

  const [cur_user,setcur_user]=useState("")
  const [currentUser, setCurrentUser] = useState("")

  const user = {
    currentUser: currentUser,
    setCurrentUser,
    cur_user: cur_user,
    setcur_user
  }
 

  

  return (
    <AppContext.Provider value={user} >
        <div className="App">
        <MainContent />
        </div>
    </AppContext.Provider>
    
  );
}

export default App;
