import React from "react";
import styled from "styled-components";

import { Silk } from "ws-visu-obj";

const Container = styled.div`
  canvas {
    display: block;
    margin: 80px auto;
  }
`;

export default class PageSilk extends React.Component {
  render() {
    return (
      <Container>
        <Silk
          data={[
            [{ title: "수익성" }],
            [
              { title: "정책민감도", isMinor: true },
              { title: "채권보전", isMinor: true },
              { title: "차입자신용", isMinor: true },
              { title: "외부리스크", isMinor: true },
              { title: "경기민감도", isMinor: true },
              { title: "담보구조", isMinor: true },
              { title: "유동성" }
            ]
          ]}
          options={{}}
        />
      </Container>
    );
  }
}
