import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul`
  display: flex;
  padding: 0 0 16px 0;
  list-style: none;
  border-bottom: thin solid black;
  li:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default class ComponentNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: props.pages
    };
  }
  render() {
    return (
      <Nav>
        {this.state.pages.map(({ link, title }) => (
          <li key={link}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </Nav>
    );
  }
}
