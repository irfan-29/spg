import React, {componentDidMount} from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import SyncIcon from "@mui/icons-material/Sync";

import { CopyToClipboard } from "react-copy-to-clipboard";

function Input() {
  const [number, setNumber] = React.useState(12);
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [strength, setStrength] = React.useState("");
  // const [result, setResult] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const [customStyle, setCustomStyle] = React.useState("red");


  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);

  var up = 0, low=0, num=0, special=0, count=0, length=0;
  var n = value.length + dob.length;
  var result = value + dob;

  for(var i=0; i<n; i++){
    if(result.charAt(i).match(/[A-Z]/)){
      up++;
    }
    if(result.charAt(i).match(/[a-z]/)){
      low++;
    }
    if(result.charAt(i).match(/[0-9]/)){
      num++;
    }
    if(result.length>8){
      length++;
    }
    const characters = "~!@#$%^&*()_-+=";
    for(var j=0; j<characters.length; j++){
      if(result.charAt(i)===characters.charAt(j)){
        special++;
      }
    }
  }
  if(up>0){
    count++;
  }if(low>0){
    count++;
  }if(num>0){
    count++;
  }if(special>0){
    count++;
  }if(length>0){
    count++;
  }
  if(count===0){
    setStrength("*too week");
  }else if(count===1){
    setStrength("*week");
    setCustomStyle("#E40808");
  }else if(count===2){
    setStrength("*medium");
    setCustomStyle("#ffc40c");
  }else if(count===3){
    setStrength("*strong");
    setCustomStyle("blue");
  }else if(count===4){
    setStrength("*very strong");
    setCustomStyle("#2CB117");
  }else{
    setStrength("*very very strong");
    setCustomStyle("#2CB117");
  }
  }

  function handleDobChange(event) {
    const value = event.target.value;
    const newValue = value.replaceAll("-", "");
    setDob(newValue);

    var up = 0, low=0, num=0, special=0, count=0, length=0;
    var n = name.length + newValue.length;
    var result = name + newValue;

  for(var i=0; i<n; i++){
    if(result.charAt(i).match(/[A-Z]/)){
      up++;
    }
    if(result.charAt(i).match(/[a-z]/)){
      low++;
    }
    if(result.charAt(i).match(/[0-9]/)){
      num++;
    }
    if(result.length>8){
      length++;
    }
    const characters = "~!@#$%^&*()_-+=";
    for(var j=0; j<characters.length; j++){
      if(result.charAt(i)===characters.charAt(j)){
        special++;
      }
    }
  }
  if(up>0){
    count++;
  }if(low>0){
    count++;
  }if(num>0){
    count++;
  }if(special>0){
    count++;
  }if(length>0){
    count++;
  }
  if(count===0){
    setStrength("*too week");
  }else if(count===1){
    setStrength("*week");
    setCustomStyle("#E40808");
  }else if(count===2){
    setStrength("*medium");
    setCustomStyle("#ffc40c");
  }else if(count===3){
    setStrength("*strong");
    setCustomStyle("blue");
  }else if(count===4){
    setStrength("*very strong");
    setCustomStyle("#2CB117");
  }else{
    setStrength("*very very strong");
    setCustomStyle("#2CB117");
  }
  }
  function handleNumberChange(event) {
    const value = event.target.value;
    setNumber(value);
  }
  function handleSpecialChange(event) {
    const characters = "~!@#$%^&*()_-+=";
    const newChar = characters.charAt(Math.floor(Math.random() * characters.length));
    const toChange = Math.floor(Math.random() * name.length);
    setName((prevValue) => {
      if (event.target.checked) {
        var value = prevValue.substring(0, toChange) + newChar + prevValue.slice(toChange);

        var up = 0, low=0, num=0, special=0, count=0, length=0;
  var n = value.length + dob.length;
  var result = value + dob;

  for(var i=0; i<n; i++){
    if(result.charAt(i).match(/[A-Z]/)){
      up++;
    }
    if(result.charAt(i).match(/[a-z]/)){
      low++;
    }
    if(result.charAt(i).match(/[0-9]/)){
      num++;
    }
    if(result.length>8){
      length++;
    }
    const characters = "~!@#$%^&*()_-+=";
    for(var j=0; j<characters.length; j++){
      if(result.charAt(i)===characters.charAt(j)){
        special++;
      }
    }
  }
  console.log(up, low, num, special, length);
  if(up>0){
    count++;
  }if(low>0){
    count++;
  }if(num>0){
    count++;
  }if(special>0){
    count++;
  }if(length>0){
    count++;
  }
  if(count===0){
    setStrength("*too week");
  }else if(count===1){
    setStrength("*week");
    setCustomStyle("#E40808");
  }else if(count===2){
    setStrength("*medium");
    setCustomStyle("#ffc40c");
  }else if(count===3){
    setStrength("*strong");
    setCustomStyle("blue");
  }else if(count===4){
    setStrength("*very strong");
    setCustomStyle("#2CB117");
  }else{
    setStrength("*very very strong");
    setCustomStyle("#2CB117");
  }      
        return value;
      } else {
        var value = prevValue;
        return prevValue;
      }
    }); 
  }


  function handleCapsChange(event) {
    const toChange = Math.floor(Math.random() * name.length);
    setName((prevValue) => {
      if (event.target.checked) {

        var value = prevValue.substring(0, toChange) + prevValue.charAt(toChange).toUpperCase() + prevValue.slice(toChange + 1);

        var up = 0, low=0, num=0, special=0, count=0, length=0;
        var n = value.length + dob.length;
        var result = value + dob;

  for(var i=0; i<n; i++){
    if(result.charAt(i).match(/[A-Z]/)){
      up++;
    }
    if(result.charAt(i).match(/[a-z]/)){
      low++;
    }
    if(result.charAt(i).match(/[0-9]/)){
      num++;
    }
    if(result.length>8){
      length++;
    }
    const characters = "~!@#$%^&*()_-+=";
    for(var j=0; j<characters.length; j++){
      if(result.charAt(i)===characters.charAt(j)){
        special++;
      }
    }
  }
  if(up>0){
    count++;
  }if(low>0){
    count++;
  }if(num>0){
    count++;
  }if(special>0){
    count++;
  }if(length>0){
    count++;
  }
  if(count===0){
    setStrength("*too week");
  }else if(count===1){
    setStrength("*week");
    setCustomStyle("#E40808");
  }else if(count===2){
    setStrength("*medium");
    setCustomStyle("#ffc40c");
  }else if(count===3){
    setStrength("*strong");
    setCustomStyle("blue");
  }else if(count===4){
    setStrength("*very strong");
    setCustomStyle("#2CB117");
  }else{
    setStrength("*very very strong");
    setCustomStyle("#2CB117");
  }
        return value;
      } else {
        return prevValue;
      }
    });
  }

  function handleSmallChange(event) {
    const toChange = Math.floor(Math.random() * name.length);
    setName((prevValue) => {
      if (event.target.checked) {
        var value = prevValue.substring(0, toChange) + prevValue.charAt(toChange).toLowerCase() + prevValue.slice(toChange + 1);

        var up = 0, low=0, num=0, special=0, count=0, length=0;
        var n = value.length + dob.length;
        var result = value + dob;

  for(var i=0; i<n; i++){
    if(result.charAt(i).match(/[A-Z]/)){
      up++;
    }
    if(result.charAt(i).match(/[a-z]/)){
      low++;
    }
    if(!result.charAt(i).match(/[0-9]/)){
      num++;
    }
    if(result.length>8){
      length++;
    }
    const characters = "~!@#$%^&*()_-+=";
    for(var j=0; j<characters.length; j++){
      if(result.charAt(i)===characters.charAt(j)){
        special++;
      }
    }
  }
  if(up>0){
    count++;
  }if(low>0){
    count++;
  }if(num>0){
    count++;
  }if(special>0){
    count++;
  }if(length>0){
    count++;
  }
  if(count===0){
    setStrength("*too week");
  }else if(count===1){
    setStrength("*week");
    setCustomStyle("#E40808");
  }else if(count===2){
    setStrength("*medium");
    setCustomStyle("#ffc40c");
  }else if(count===3){
    setStrength("*strong");
    setCustomStyle("blue");
  }else if(count===4){
    setStrength("*very strong");
    setCustomStyle("#2CB117");
  }else{
    setStrength("*very very strong");
    setCustomStyle("#2CB117");
  }
        return value;
      } else {
        return prevValue;
      }
    });
  }

  function handleRefresh() {
    const toChange1 = Math.floor(Math.random() * name.length);
    const toChange2 = Math.floor(Math.random() * name.length);
    const toChange3 = Math.floor(Math.random() * name.length);
    const special = "~!@#$%^&*()_-+=";
    const newChar = special.charAt(Math.floor(Math.random() * special.length));
    setName((prevValue) => {
      return (
        prevValue.substring(0, toChange1) + newChar + prevValue.slice(toChange1)
      );
    });
    setName((prevValue) => {
      return (
        prevValue.substring(0, toChange2) +
        prevValue.charAt(toChange2).toUpperCase() +
        prevValue.slice(toChange2 + 1)
      );
    });
    setName((prevValue) => {
      var value = prevValue.substring(0, toChange3) + prevValue.charAt(toChange3).toLowerCase() + prevValue.slice(toChange3 + 1);

      var up = 0, low=0, num=0, special=0, count=0, length=0;
        var n = value.length + dob.length;
        var result = value + dob;

  for(var i=0; i<n; i++){
    if(result.charAt(i).match(/[A-Z]/)){
      up++;
    }
    if(result.charAt(i).match(/[a-z]/)){
      low++;
    }
    if(result.charAt(i).match(/[0-9]/)){
      num++;
    }
    if(result.length>8){
      length++;
    }
    const characters = "~!@#$%^&*()_-+=";
    for(var j=0; j<characters.length; j++){
      if(result.charAt(i)===characters.charAt(j)){
        special++;
      }
    }
  }
  if(up>0){
    count++;
  }if(low>0){
    count++;
  }if(num>0){
    count++;
  }if(special>0){
    count++;
  }if(length>0){
    count++;
  }
  if(count===0){
    setStrength("*too week");
  }else if(count===1){
    setStrength("*week");
    setCustomStyle("#E40808");
  }else if(count===2){
    setStrength("*medium");
    setCustomStyle("#ffc40c");
  }else if(count===3){
    setStrength("*strong");
    setCustomStyle("blue");
  }else if(count===4){
    setStrength("*very strong");
    setCustomStyle("#2CB117");
  }else{
    setStrength("*very very strong");
    setCustomStyle("#2CB117");
  }
      return value;
    });
  }
  function handleReset(){
    window.location.reload(false);
  }

  var newResult = name + dob;
  var result = newResult.substring(0, number);


  return (
    <div className="display">
      <ButtonGroup size="md" className="mb-2 navigation">
        <Button variant="light" href="/" className="px-5 btn">
          Create Password
        </Button>
        <Button variant="dark" href="/random" className="px-5 btn">
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
        controlId="floatingInput"
        width="40%"
        label="Name"
        className="mb-4 ip"
      >
        <Form.Control
          type="name"
          id="name"
          name="name"
          onChange={(event)=>{handleNameChange(event);}}
          value={name}
          placeholder="Name"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingDOB" label="DOB" className="mb-4 ip">
        <Form.Control
          type="date"
          name="dob"
          id="dob"
          onChange={(event)=>{handleDobChange(event);}}
          placeholder="dob"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingNumber"
        label="Size"
        className="mb-4 ip"
      >
        <Form.Control
          type="number"
          name="number"
          id="number"
          onChange={(event)=>{handleNumberChange(event);}}
          value={number}
          placeholder="Number"
        />
      </FloatingLabel>

      <div className="checkboxes">
        <input
          type="checkbox"
          name="special"
          id="special"
          onChange={(event)=>{handleSpecialChange(event);}}
          className="checks"
        />
        <label for="special">Include special characters</label>
        <br />
        <input
          type="checkbox"
          name="caps"
          id="caps"
          onChange={(event)=>{handleCapsChange(event);}}
          className="checks"
        />
        <label for="caps">Include Capital letters</label>
        <br />
        <input
          type="checkbox"
          name="caps"
          id="caps"
          onChange={(event)=>{handleSmallChange(event);}}
          className="checks"
        />
        <label for="caps">Include Small letters</label>
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

      
      {result!=="" && (<div><p className="option" style={{color: customStyle, fontSize: "15px", fontWeight: "600"}}>{strength}</p><Button variant="danger" onClick={handleReset} style={{width: "80px"}} className="reset-btn">Reset</Button></div>)}    
      
    </div>
  );
}

export default Input;
