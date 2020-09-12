import React, { useCallback, useContext} from "react";
import { Link } from "@reach/router";
import { auth } from "../../firebase";
import { AuthContext } from "../../Auth";
import {useAuth0} from "@auth0/auth0-react";
// import {signUp} from "./SignUp";

const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();
  return(
   <button onClick={() => loginWithRedirect()}>
    Login
   </button>
  )
 
}
export default LoginButton