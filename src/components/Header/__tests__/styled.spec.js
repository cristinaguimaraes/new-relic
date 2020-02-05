import React from "react";
import { shallow } from "enzyme";

import { Title, Text, Wrapper, Icon } from "../styled";

describe("Header styled components", () => {
  test("Title should render properly", () => {
    expect(shallow(<Title />)).toMatchSnapshot();
  });

  test("SubTitle should render properly", () => {
    expect(shallow(<Text />)).toMatchSnapshot();
  });

  test("Wrapper should render properly", () => {
    expect(shallow(<Wrapper />)).toMatchSnapshot();
  });

  test("Icon should render properly", () => {
    expect(shallow(<Icon />)).toMatchSnapshot();
  });
});
