import React from "react";
import styled from "styled-components";

import { Line } from "ws-visu-obj";

const Container = styled.div`
  canvas {
    display: block;
    margin: 80px auto;
  }
`;

export default class PageLine extends React.Component {
  render() {
    return (
      <Container>
        <Line
          data={[
            {
              value: 1,
              title: "2019.5월",
              countUp: { start: 0, end: 1293293, suffix: "원" }
            },
            { value: 2 + Math.random() ** 2, title: "", subtitle: "" },
            { value: 3 + Math.random() ** 2, title: "", subtitle: "" },
            { value: 4 + Math.random() ** 2, title: "", subtitle: "" },
            { value: 5 + Math.random() ** 2, title: "", subtitle: "" },
            { value: 6 + Math.random() ** 2, title: "", subtitle: "" },
            { value: 7 + Math.random() ** 2, title: "", subtitle: "" },
            { value: 8 + Math.random() ** 2, title: "", subtitle: "" },
            { value: 9 + Math.random() ** 2, title: "", subtitle: "" },
            {
              value: 10,
              title: "2020.1월",
              subtitle: "48,273,389원",
              countUp: { start: 1293293, end: 48273389, suffix: "원" }
            }
          ]}
          options={{
            title: "월별 상환 수익액 (세후)",
            annotationTitleFontSize: 10,
            annotationSubtitleFontSize: 12,
            hasAxis: false
          }}
        />
        <Line
          data={[
            [
              { value: 1, title: "", subtitle: "" },
              { value: 2 + Math.random() ** 2, title: "", subtitle: "" },
              { value: 4 + Math.random() ** 2, title: "", subtitle: "" },
              { value: 7 + Math.random() ** 2, title: "", subtitle: "" },
              { value: 20, title: "aMAP", subtitle: "다중 대체자산" }
            ],
            [
              { value: 1, title: "", subtitle: "" },
              { value: 2 + Math.random() ** 2, title: "", subtitle: "" },
              { value: 3 + Math.random() ** 2, title: "", subtitle: "" },
              { value: 4 + Math.random() ** 2, title: "", subtitle: "" },
              { value: 5 + Math.random(), title: "", subtitle: "단일 대체자산" }
            ]
          ]}
          options={{
            hasAxis: true,
            annotationTitleFontSize: 12,
            annotationSubtitleFontSize: 12
          }}
        />
      </Container>
    );
  }
}
