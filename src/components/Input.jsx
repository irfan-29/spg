import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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
    const special = "~!@#$%^&";
    const newChar = special.charAt(Math.floor(Math.random() * special.length));
    setName((prevValue) => {
      if (prevValue.includes('@')) {
        return prevValue.replace('@', '');
      }else if (prevValue.includes('~')) {
        return prevValue.replace('~', '');
      }else if (prevValue.includes('#')) {
        return prevValue.replace('#', '');
      }else if (prevValue.includes('!')) {
        return prevValue.replace('!', '');
      }else if (prevValue.includes('$')) {
        return prevValue.replace('$', '');
      }else if (prevValue.includes('%')) {
        return prevValue.replace('%', '');
      }else if (prevValue.includes('^')) {
        return prevValue.replace('^', '');
      }else if (prevValue.includes('&')) {
        return prevValue.replace('&', '');
      } else {
        return prevValue + newChar;
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
    <div className="display">
      <ButtonGroup size="md" className="mb-2 navigation">
        <Button variant="light" href="/" className="px-5 btn">Create Password</Button>
        <Button variant="dark" href="/random" className="px-5 btn">Generate Password</Button>
      </ButtonGroup>
      <br/>
      <br/>
      <br/>
       
      {alert ? <Alert variant="success" className="alert" onClose={() => setAlert(false)} dismissible>🥳 Your Password has been saved successfully to your clipboard</Alert> : ""}
     
      <FloatingLabel controlId="floatingInput" width="40%" label="Name" className="mb-4 ip">
        <Form.Control type="name" id="name" name="name" onChange={handleNameChange} value={name} placeholder="Name"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingDOB" label="DOB" className="mb-4 ip">
        <Form.Control type="date" name="dob" id="dob" onChange={handleDobChange} placeholder="dob"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingNumber" label="Size" className="mb-4 ip">
        <Form.Control type="number" name="number" id="number" onChange={handleNumberChange} value={number} placeholder="Number"/>
      </FloatingLabel>
      
      <div className="checkboxes">
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
      </div>
      
      <br/>

      <div className="copy">    
        {result!=="" && <h1 className="copyContent">{result}
        <CopyToClipboard text={result}>
          <ContentCopyIcon fontSize="medium" onClick={() => setAlert(true)} className="copyIcon"/>
        </CopyToClipboard></h1> }   
        
        </div>
    </div>
  );
}

export default Input;
