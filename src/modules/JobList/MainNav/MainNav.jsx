import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import ServiceOption from "./ServiceOption/ServiceOption.jsx";
import SellerDetail from "./SellerDetail/SellerDetail";
import Budget from "./Budget";
import DeliveryTime from "./DeliveryTime";
import Category from "./Category";
import "./styles.scss";

function MainNav() {
  return (
    <Nav id="MainNav">
      <NavDropdown title="Category" id="nav-dropdown1">
        <Category />
      </NavDropdown>

      <NavDropdown title="Service options" id="nav-dropdown2">
        <ServiceOption />
      </NavDropdown>

      <NavDropdown title="Seller details" id="nav-dropdown3">
        <SellerDetail />
      </NavDropdown>

      <NavDropdown title="Budget" id="nav-dropdown2">
        <Budget />
      </NavDropdown>

      <NavDropdown title="Delivery time" id="nav-dropdown4">
        <DeliveryTime />
      </NavDropdown>
    </Nav>
  );
}

export default MainNav;
