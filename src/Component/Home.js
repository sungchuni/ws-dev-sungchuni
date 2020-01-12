import React from "react";
import VisualzationObject from "ws-visu-obj";

export default function Home() {
  const data = [
    { value: 0.21, title: "7.5%" },
    { value: 0.44, title: "" },
    { value: 0.32, title: "12%" }
  ];
  const options = {
    title: "연수익률(세전)",
    showTopAnnotation: true,
    isPercentage: true
  };
  return <VisualzationObject.Leaf data={data} options={options} />;
}
