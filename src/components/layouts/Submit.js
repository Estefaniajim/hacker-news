import React from "react";
import { Button } from "react-bootstrap";

const Submit = () => {
  return (
    <div >
    title:
   <input></input> <br></br>
    <br></br>
    url: <input></input> <br></br>
    <br></br>
  
   
        or
    <br></br>
    <br></br>
   
    text:<input></input><br></br>
    <br></br>
  
    <br></br>
    <br></br>
    <Button>submit</Button>
    <br></br>
    <br></br>
Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.

You can also submit via bookmarklet.
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


       
    </div>
  );
};

export default Submit;
