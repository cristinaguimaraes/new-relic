import { AddAppForm } from "../AddAppForm";
import { shallow } from "enzyme";
import React from "react";

describe("AddAppForm component", () => {
  test("should render properly", () => {
    expect(
      shallow(
        <AddAppForm onAddApp={jest.fn()} onShowToastMessage={jest.fn()}>
          Test
        </AddAppForm>
      )
    ).toMatchSnapshot();
  });
});
