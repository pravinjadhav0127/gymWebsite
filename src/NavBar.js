import React, { useState } from "react";
import { Route, Switch } from "react-router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import FeaturesNav from "./FeaturesNav";
import Header from "./Header";

import photo from "./img/img1.jpg";
import Offer from "./Offer";
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md ">
        <NavbarBrand className="text-white ms-2 ">Gym</NavbarBrand>
        <NavbarToggler className="text-back" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className=" nav ">
          <Nav className="mr-auto navbar" navbar>
            <NavItem>
              <NavLink href="/">Header</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/features/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/offer/">Offer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://www.gymandfitness.com.au/">
                Gallery
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
      <div className="nav_img">
        <img src={photo} />
      </div>
    </div>
  );
};

export default NavBar;
