import { RemoveAppForm } from "../RemoveAppForm";
import { shallow } from "enzyme";
import React from "react";

describe("RemoveAppForm component", () => {
  test("should render properly", () => {
    expect(
      shallow(
        <RemoveAppForm
          onDeleteApp={() => {}}
          onShowToastMessage={() => {}}
          data={[{ name: "Awesome Wooden Sausages - Schaefer - Hegmann Inc" }]}
        >
          Test
        </RemoveAppForm>
      )
    ).toMatchSnapshot();
  });
});
