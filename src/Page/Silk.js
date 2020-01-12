import React from "react";
import styled from "styled-components";

const Container = styled.div`
  canvas {
    display: block;
    margin: 80px auto;
  }
`;

export default class PageSilk extends React.Component {
  render() {
    return <Container></Container>;
  }
}
