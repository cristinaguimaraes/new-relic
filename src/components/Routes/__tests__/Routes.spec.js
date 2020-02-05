import { Routes } from "../Routes";
import { shallow } from "enzyme";
import React from "react";

describe("Routes component", () => {
  test("should render properly", () => {
    expect(
      shallow(
        <Routes onAddApp={jest.fn()} onShowToastMessage={jest.fn()}>
          Test
        </Routes>
      )
    ).toMatchSnapshot();
  });
});
