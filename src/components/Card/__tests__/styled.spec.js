import React from "react";
import { shallow, mount } from "enzyme";

import { Apdex, Wrapper, Name, App, Host } from "../styled";

describe("Card styled components", () => {
  test("Apdex should render properly", () => {
    expect(shallow(<Apdex />)).toMatchSnapshot();
  });

  test("Name should render properly", () => {
    expect(shallow(<Name />)).toMatchSnapshot();
  });

  test("should apply styles according to passed props", () => {
    const wrapper = mount(<Wrapper />);

    wrapper.setProps({ layout: "list", index: 3 });
    expect(wrapper).toHaveStyleRule("margin-left", "30px");
    expect(wrapper).toHaveStyleRule("width", "780px");
    expect(wrapper).toHaveStyleRule("min-width", "780px");
    expect(wrapper).toHaveStyleRule("max-width", "780px");

    wrapper.setProps({ layout: "grid", index: 0 });
    expect(wrapper).toHaveStyleRule("margin-left", "0px");
    expect(wrapper).toHaveStyleRule("width", "315px");
    expect(wrapper).toHaveStyleRule("min-width", "315px");
    expect(wrapper).toHaveStyleRule("max-width", "315px");
    expect(shallow(<Wrapper />)).toMatchSnapshot();
  });

  test("App should render properly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  test("Host should render properly", () => {
    expect(shallow(<Host />)).toMatchSnapshot();
  });
});
