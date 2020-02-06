import { AddAppForm } from "../AddAppForm";
import { shallow } from "enzyme";
import React from "react";

describe("AddAppForm component", () => {
  test("should render properly", () => {
    expect(
      shallow(
        <AddAppForm onAddApp={() => {}} onShowToastMessage={() => {}}>
          Test
        </AddAppForm>
      )
    ).toMatchSnapshot();
  });
});
