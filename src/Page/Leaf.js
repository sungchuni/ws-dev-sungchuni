import React from "react";
import styled from "styled-components";

import { Leaf } from "ws-visu-obj";

const Container = styled.div`
  canvas {
    display: block;
    margin: 80px auto;
  }
`;

const DUMMIES = [
  {
    data: [
      { value: 2, title: "유동성" },
      { value: 5, title: "수익성" },
      { value: 4, title: "예측성" }
    ],
    options: {}
  },
  {
    data: [
      { value: 3, title: "유동성" },
      { value: 5, title: "수익성" },
      { value: 2, title: "예측성" }
    ],
    options: {}
  },
  {
    data: [
      { value: 0.2, title: "1개월" },
      { value: 0.1, title: "" },
      { value: 0.445, title: "12개월" }
    ],
    options: { title: "만기", showTopAnnotation: true, isPercentage: true }
  },
  {
    data: [
      { value: 0.075, title: "7.5%" },
      { value: 0.432, title: "" },
      { value: 0.012, title: "12%" }
    ],
    options: {
      title: "연수익률(세전)",
      showTopAnnotation: true,
      isPercentage: true,
      isScrollObserved: true
    }
  },
  {
    data: [
      { value: 0.2, title: "부동산" },
      { value: 0.504, title: "기업" },
      { value: 0.1, title: "개인" }
    ],
    options: {
      title: "채권 유형",
      showTopAnnotation: true,
      isPercentage: true,
      animationDuration: 4000
    }
  }
];

export default class PageLeaf extends React.Component {
  render() {
    return (
      <Container>
        {this.props.children}
        {DUMMIES.map(({ data, options }, index) => (
          <Leaf data={data} options={options} key={index} />
        ))}
      </Container>
    );
  }
}
