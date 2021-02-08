import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ height: "60%", padding: 20 }}>
      <Navbar style={{ padding: 20 }} color="light" light expand="md">
        <NavbarBrand href="/">ONBOARD</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink href="/KYC">KYC</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/KYB">KYB</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/CTI">Company Trading INFO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/CI">Compnay Information</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/check-List">Check List</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
