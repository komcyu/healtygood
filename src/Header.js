import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./Home";
import logo from './logo.svg'; 

import Profile from "./Profile";
import Contect from "./Contect";

import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Height } from "@mui/icons-material";
const Header = () => {
return (
<Router>
<Navbar bg="light" expand="lg">
<Container fluid>
<Navbar.Brand href="#">

</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav
className="me-auto my-2 my-lg-0"
style={{ maxHeight: "100px" }}
>
<Nav>
<Link to="/" style={{ padding: 15, textDecoration: "none" }}>
อาหาร
</Link>
<Link
to="/Profile"
style={{ padding: 15, textDecoration: "none" }}
>

คำนวณหาค่า Bmi
</Link>



<Link
to="/Contect"
style={{ padding: 15, textDecoration: "none" }}
>
ตารางออกกำลังกาย
</Link>



</Nav>

</Nav>
<SocialIcon
network="instagram"
url="https://www.instagram.com/"
style={{ height: 30, width: 30, margin: 10 }}
/>
<SocialIcon
network="twitter"
url="https://twitter.com/"
style={{ height: 30, width: 30, margin: 10 }}
/>
<SocialIcon
network="google"
url="https://www.google.com/"
style={{ height: 30, width: 30, margin: 10 }}
/>
<SocialIcon
network="facebook"
url="https://www.facebook.com/"
style={{ height: 30, width: 30, margin: 10 }}
/>
<Form className="d-flex">
<Form.Control
type="search"
placeholder="Search"

className="me-2"
aria-label="Search"
/>
</Form>
<Nav>

</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
<div className="App">
<Routes>
<Route path="/" element={<Home />} />

<Route path="/Profile" element={<Profile />} />
<Route path="/Contect" element={<Contect />} />
<Route exact path="/Home" element={<Home />} />
</Routes>
</div>
</Router>
);
};
export default Header;