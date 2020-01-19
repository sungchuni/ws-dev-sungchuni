import React from "react";
import styled from "styled-components";

import { Sphere } from "ws-visu-obj";

const Container = styled.div`
  canvas {
    display: block;
    margin: 80px auto;
  }
`;

export default class PageSphere extends React.Component {
  render() {
    return (
      <Container>
        <Sphere options={{}} />
        <Sphere
          options={{
            dotsQuantity: 128,
            dotSize: 1.5
          }}
        />
      </Container>
    );
  }
}
