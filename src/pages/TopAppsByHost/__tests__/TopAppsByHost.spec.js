import { TopAppsByHost } from "../TopAppsByHost";
import { shallow } from "enzyme";
import React from "react";

describe("TopAppsByHost component", () => {
  test("should render properly", () => {
    expect(
      shallow(
        <TopAppsByHost
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
        </TopAppsByHost>
      )
    ).toMatchSnapshot();
  });
});
