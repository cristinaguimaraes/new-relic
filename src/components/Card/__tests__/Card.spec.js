import { Card } from "../Card";
import { shallow } from "enzyme";
import React from "react";

describe("Card component", () => {
  test("should render properly", () => {
    expect(
      shallow(
        <Card
          onShowToastMessage={jest.fn()}
          index={1}
          layout={"list"}
          host={"7e6272f7-098e.dakota.biz"}
          apps={[
            {
              name: "Awesome Wooden Sausages - Schaefer - Hegmann Inc",
              apdex: 100
            }
          ]}
        >
          Test
        </Card>
      )
    ).toMatchSnapshot();
  });
});
