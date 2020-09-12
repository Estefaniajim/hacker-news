import React, { useState } from "react";
import Header from "./components/layouts/Header";
import Navbar2 from "./components/layouts/Navbar2";
import Footer from "./components/layouts/Footer";
import News from "./components/News";
import Welcome from "./components/layouts/Welcome";
import LoginButton from "./components/layouts/LoginButton";
import LogoutButton from "./components/layouts/LogoutButton";
import { AuthProvider } from './Auth';
import CommentForm from "./components/layouts/CommentForm";
import Threads from "./components/layouts/Threads";
import SignUp from "./components/layouts/SignUp";
import forgotPassword from "./components/layouts/forgotPassword";


import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [isLoading, setLoadingState] = useState(true);

  const showLoader = () => {
    setLoadingState(true);
  };
  const hideLoader = () => {
    setLoadingState(false);
  };

  return (
    
 
    <Router>
      <Header showLoader={showLoader} />
      <Navbar2 showLoader={showLoader} />
      <Switch>
        <>
          <Route
            exact
            key="home"
            path="/"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            exact
            key="threads"
            path="/threads"
            render={() => (
              <Threads
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />

<Route
            exact
            key="welcome"
            path="/welcome"
            render={() => (
              <Welcome
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />

<Route
            exact
            key="past"
            path="/past"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          
          <Route
            key="signUp"
            path="/signUp"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
           
          <Route
            key="shows"
            path="/shows"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
           <Route
            key="comments"
            path="/comments"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            key="ask"
            path="/ask"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            key="jobs"
            path="/jobs"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />

          <Route
            key="top"
            path="/top"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
           <Route
            key="login"
            path="/login"
            render={() => (
            <>
              <LoginButton/>
              <LogoutButton/>
            </>
             
              
            
            
            

            )}
          />
          

           <Route
            key="forgotPassword"
            path="/forgotPassword"
            render={() => (
              <forgotPassword
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />

            )}
          />

         <Route
            key="submit"
            path="/submit"
            render={() => (
             
             
              <CommentForm/>
            )}
          />
          <Route
            key="new"
            path="/new"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            key="best"
            path="/best"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
        </>
      </Switch>
    
      <Footer />
    </Router>
  
  );
};

export default App;
