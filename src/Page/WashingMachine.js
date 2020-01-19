import React from "react";
import styled from "styled-components";

import { WashingMachine } from "ws-visu-obj";

const Container = styled.div`
  canvas {
    display: block;
    margin: 80px auto;
  }
`;

export default class PageWashingMachine extends React.Component {
  render() {
    return (
      <Container>
        <WashingMachine
          data={[
            [
              { key: 1, title: "3개월", link: [4, 5] },
              { key: 2, title: "6개월", link: [1, 5, 6] },
              { key: 3, title: "12개월", link: [1, 2, 3] }
            ],
            [
              { key: 1, title: "주택담보ABL", link: [2] },
              { key: 2, title: "기업매출채권", link: [2] },
              { key: 3, title: "사행이익ABL", link: [2] },
              { key: 4, title: "IoTFarm", link: [1] },
              { key: 5, title: "CAPEX", link: [1, 3] },
              { key: 6, title: "개인신용", link: [1, 3] }
            ],
            [
              { key: 1, title: "7.6%" },
              { key: 2, title: "10.9%" },
              { key: 3, title: "8.3%" }
            ]
          ]}
          options={{ width: 640, height: 320 }}
        />
      </Container>
    );
  }
}
