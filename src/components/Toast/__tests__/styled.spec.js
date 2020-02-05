import React from "react";
import {mount, shallow} from "enzyme";

import { TextWrapper, Text } from "../styled";

describe("Toast styled components", () => {
  test("TextWrapper should render properly", () => {
    const wrapper = mount(<TextWrapper />);
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ type: "success"});
    expect(wrapper).toHaveStyleRule("background-color", "green");

    wrapper.setProps({ type: "failure" });
    expect(wrapper).toHaveStyleRule("background-color", "red");

    expect(wrapper).toMatchSnapshot();
  });

  test("Text should render properly", () => {
    expect(shallow(<Text />)).toMatchSnapshot();
  });
});
