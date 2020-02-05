import React from "react";
import { shallow } from "enzyme";

import { Content, Link } from "../styled";

describe("Home styled components", () => {
  test("Content should render properly", () => {
    expect(shallow(<Content />)).toMatchSnapshot();
  });

  test("Link should render properly", () => {
    expect(shallow(<Link />)).toMatchSnapshot();
  });
});
