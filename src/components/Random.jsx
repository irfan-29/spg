import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import SyncIcon from "@mui/icons-material/Sync";

import { CopyToClipboard } from "react-copy-to-clipboard";

function Random() {
  const [number, setNumber] = React.useState(12);
  const [name, setName] = React.useState("");
  const [alert, setAlert] = React.useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  const use = React.useEffect(()=>{handleRefresh();
},[]);


  function handleNumberChange(event) {
    const value = event.target.value;
    setNumber(value);
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < value; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setName(result);
  }

  function handleSpecialChange(event) {
    const special = "~!@#$%^&*()_-+=";
    const newChar = special.charAt(Math.floor(Math.random() * special.length));
    const toChange = Math.floor(Math.random() * name.length);
    setName((prevValue) => {
      if (event.target.checked) {
        return (
          prevValue.substring(0, toChange) + newChar + prevValue.slice(toChange)
        );
      } else {
        return prevValue;
      }
    });
  }
  function handleRefresh(){
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < number; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setName(result);
  }
  function handleReset(){  
    window.location.reload(false);
  }

  var result = name;
  result = result.substring(0, number);

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
        label="Size"
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

      <div className="checkboxes">
        <input
          type="checkbox"
          name="special"
          id="special"
          onChange={handleSpecialChange}
          className="checks"
        />
        <label for="special">Include special characters</label>
        
      </div>
      <br />

      <div className="copy">
        {result !== "" && (
          <h1 className="copyContent">
            {result}
            <br />
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5px" }}>
              <CopyToClipboard text={result}>
                <div>
                  <ContentCopyIcon
                    title="hello"
                    fontSize="medium"
                    onClick={() => setAlert(true)}
                    className="copyIcon"
                  />
                  <span>copy</span>
                </div>
              </CopyToClipboard>
              <SyncIcon style={{position: "relative", top: "15px", marginLeft: "10px"}} onClick={handleRefresh} />
            </div>
          </h1>
        )}
      </div>
      {result!=="" && (<Button variant="danger" onClick={handleReset} style={{width: "80px"}} className="reset-btn">Reset</Button>)}    
    </div>
  );
}

export default Random;
