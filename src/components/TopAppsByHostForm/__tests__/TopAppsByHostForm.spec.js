import { TopAppsByHostForm } from "../TopAppsByHostForm";
import { shallow } from "enzyme";
import React from "react";

describe("TopAppsByHostForm component", () => {
  test("should render properly", () => {
    const fn = () => {};
    expect(
      shallow(
        <TopAppsByHostForm
          history={{ push: fn }}
          onShowToastMessage={fn}
          onDeleteApp={fn}
        />
      )
    ).toMatchSnapshot();
  });
});
