import React from "react";
import styled from "styled-components";

import { Tree } from "ws-visu-obj";

const Container = styled.div`
  canvas {
    display: block;
    margin: 80px auto;
  }
`;

export default class PageTree extends React.Component {
  render() {
    return (
      <Container>
        <Tree options={{}} />
      </Container>
    );
  }
}
