import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SecurityIcon from '@mui/icons-material/Security';

function Navigationbar(){
    return (<Navbar bg="primary" className="navbar" data-bs-theme="dark">
    <Container>
      <Navbar.Brand><SecurityIcon style={{position: "relative", bottom: "2.5px", right: "3px"}}/>Strong Password Generator</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Made with ❤️ by Irfan
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
}

export default Navigationbar;