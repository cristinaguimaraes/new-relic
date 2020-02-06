import { AppsByHost } from "../AppsByHost";
import { shallow } from "enzyme";
import React from "react";

describe("AppsByHost component", () => {
  test("should render properly", () => {
    expect(
      shallow(
        <AppsByHost
          data={{
            "92116865-5462.conor.com": [
              {
                name: "Small Fresh Pants - Kautzer - Boyer, and Sons",
                contributors: ["Edwin Reinger", "Ofelia Dickens"],
                version: 7,
                apdex: 68
              }
            ]
          }}
        >
          Test
        </AppsByHost>
      )
    ).toMatchSnapshot();
  });
});
