import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from 'react-bootstrap/Alert';

import {CopyToClipboard} from 'react-copy-to-clipboard';


function Input() {
  const [number, setNumber] = React.useState(12);
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [alert, setAlert] = React.useState(false);

  function handleNumberChange(event) {
    const value = event.target.value;
    setNumber(value);
  }
  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
  }
  function handleDobChange(event) {
    const value = event.target.value;
    const newValue = value.replaceAll("-", "");
    setDob(newValue);
  }
  function handleSpecialChange() {
    setName((prevValue) => {
      if (prevValue.includes("@")) {
        return prevValue.replace("@", "");
      } else {
        return prevValue + "@";
      }
    });
  }
  function handleCapsChange() {
    setName((prevValue) => {
      if (prevValue.charAt(0) !== prevValue.charAt(0).toUpperCase()) {
        return prevValue.charAt(0).toUpperCase() + prevValue.slice(1);
      } else {
        return prevValue.charAt(0).toLowerCase() + prevValue.slice(1);
      }
    });
  }

  var result = name + dob;
  result = result.substring(0, number);

  return (  
    <div style={{ margin: "60px 5px" }}>
      <ButtonGroup size="lg" className="mb-2 navigation">
        <Button variant="light" href="/" className="px-5">Create Password</Button>
        <Button variant="dark" href="/random" className="px-5">Generate Password</Button>
      </ButtonGroup>
      <br/>
      <br/>
      <label for="name">Enter the Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleNameChange}
        value={name}
        style={{ margin: "15px" }}
      />
      <br />
      <label for="dob">Enter the DOB: </label>
      <input
        type="date"
        name="dob"
        id="dob"
        onChange={handleDobChange}
        style={{ margin: "15px" }}
      />
      <br />
      <label for="number">Enter the size: </label>
      <input
        type="number"
        name="number"
        id="number"
        onChange={handleNumberChange}
        value={number}
        style={{ margin: "15px" }}
      />
      <br />
      <input
        type="checkbox"
        name="special"
        id="special"
        onChange={handleSpecialChange}
        style={{ margin: "15px" }}
      />
      <label for="special">Include special characters</label>
      <br />
      <input
        type="checkbox"
        name="caps"
        id="caps"
        onChange={handleCapsChange}
        style={{ margin: "15px" }}
      />
      <label for="caps">Include Capital letters</label>
      <br/>
      <div className="copy">    
        {result!=="" && <h1 className="copyContent">{result}</h1> }   
        <CopyToClipboard text={result}>
          <ContentCopyIcon fontSize="large" onClick={() => setAlert(true)} className="copyIcon"/>
        </CopyToClipboard>
        </div>
      <br/>   
      {alert ? <Alert variant="success" className="alert" onClose={() => setAlert(false)} dismissible>Success</Alert> : ""}
      
    </div>
  );
}

export default Input;
