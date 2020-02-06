import { Home } from "../Home";
import { shallow } from "enzyme";
import React from "react";

describe("Home component", () => {
  test("should render properly", () => {
    expect(
      shallow(<Home hasInitialData={false} onSaveInitialData={() => {}}>Test</Home>)
    ).toMatchSnapshot();
  });
});
