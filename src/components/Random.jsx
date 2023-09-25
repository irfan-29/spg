import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Alert from "react-bootstrap/Alert";
// import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { CopyToClipboard } from "react-copy-to-clipboard";

function Random() {
  const [number, setNumber] = React.useState(12);
  const [alert, setAlert] = React.useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  function handleNumberChange(event) {
    const value = event.target.value;
    setNumber(value);
  }

  var result = generateString(number);

  return (
    <div style={{ margin: "50px 5px", textAlign: "center" }}>
      <ButtonGroup size="md" className="mb-2 navigation">
        <Button variant="dark" href="/" className="px-5 btn">
          Create Password
        </Button>
        <Button variant="light" href="/random" className="px-5 btn">
          Generate Password
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <br />

      {alert ? (
        <Alert
          variant="success"
          className="alert"
          onClose={() => setAlert(false)}
          dismissible
        >
          🥳 Your Password has been saved successfully to your clipboard
        </Alert>
      ) : (
        ""
      )}

      <FloatingLabel
        controlId="floatingNumber"
        label="Enter the size"
        className="mb-4 ip"
      >
        <Form.Control
          type="number"
          name="number"
          id="number"
          onChange={handleNumberChange}
          value={number}
          placeholder="Number"
        />
      </FloatingLabel>

      <br />

      <div className="copy">
        {result!=="" && <h1 className="copyContent">{result}
        <br/>
        <CopyToClipboard text={result}>
          <div><ContentCopyIcon
          title="hello"
            fontSize="medium"
            onClick={() => setAlert(true)}
            className="copyIcon"
          /><span>copy</span>
          </div>
        </CopyToClipboard></h1> } 
        
      </div>
    </div>
  );
}

export default Random;
