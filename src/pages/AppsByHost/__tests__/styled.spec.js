import React from "react";
import { shallow } from "enzyme";

import { Content, Cards } from "../styled";

describe("Home styled components", () => {
  test("Content should render properly", () => {
    expect(shallow(<Content />)).toMatchSnapshot();
  });

  test("Cards should render properly", () => {
    expect(shallow(<Cards />)).toMatchSnapshot();
  });
});
