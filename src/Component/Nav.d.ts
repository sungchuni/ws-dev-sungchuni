import React from "react";

declare interface NavPropsPage {
  link: string;
  title: string;
  component: JSX.Element;
}

declare interface NavProps {
  pages: NavPropsPage[];
}

export default class ComponentNav extends React.Component<NavProps, {}> {
  constructor(props: NavProps);
}
