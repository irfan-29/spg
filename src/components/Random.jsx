import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from 'react-bootstrap/Alert';
// import { Link } from "react-router-dom";

import {CopyToClipboard} from 'react-copy-to-clipboard';

function Random(){

    const [number, setNumber] = React.useState(12);
    const [alert, setAlert] = React.useState(false);

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    function handleNumberChange(event){
        const value = event.target.value;
        setNumber(value);
    }

    const result = generateString(number);

    return (
    <div style={{ margin: "50px 5px" }}>
    <ButtonGroup size="md" className="mb-2 navigation">
        <Button variant="dark" href="/" className="px-5 btn">Create Password</Button>
        <Button variant="light" href="/random" className="px-5 btn">Generate Password</Button>
      </ButtonGroup>
      <br/>
      <br/>
        <label for="number">Enter the size: </label>
        <input type="number" name="number" id="number" onChange={handleNumberChange} value={number} style={{margin: "15px"}}/>
        <br/> 

        <div className="copy">
        {result!=="" && <h1 className="copyContent">{result}</h1> } 
        <CopyToClipboard text={result}>
          <ContentCopyIcon fontSize="large" onClick={() => setAlert(true)} className="copyIcon"/>
        </CopyToClipboard>

        </div>
      <br/>
      
      {alert ? <Alert variant="success" className="alert" onClose={() => setAlert(false)} dismissible>Copied!</Alert> : ""}
      
    </div>);
}

export default Random;