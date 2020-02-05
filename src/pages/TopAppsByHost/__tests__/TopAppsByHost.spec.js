import { TopAppsByHost } from "../TopAppsByHost";
import { shallow } from "enzyme";
import React from "react";

describe("TopAppsByHost component", () => {
  test("should render properly", () => {
    expect(shallow(<TopAppsByHost>Test</TopAppsByHost>)).toMatchSnapshot();
  });
});
