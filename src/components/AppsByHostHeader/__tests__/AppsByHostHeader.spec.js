import { AppsByHostHeader } from "../AppsByHostHeader";
import { shallow } from "enzyme";
import React from "react";

describe("AppsByHostHeader2 component", () => {
  test("should render properly", () => {
    expect(
      shallow(
        <AppsByHostHeader layout={"list"} onClick={() => {}}>
          Test
        </AppsByHostHeader>
      )
    ).toMatchSnapshot();
  });
});
