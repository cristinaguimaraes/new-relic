import React from "react";
import { oneOf, string, number, shape, arrayOf, func } from "prop-types";
import { Host, App, Wrapper, Name, Apdex } from "./styled";

const Card = ({ host, apps, layout, index, onShowToastMessage }) => (
  <Wrapper layout={layout} index={index}>
    <Host> {host} </Host>
    {apps.map((app, i) => (
      <App
        key={i}
        onClick={() =>
          onShowToastMessage({ messageKey: `Release number ${app.version}`, type:'success' })
        }
      >
        <Apdex> {app.apdex} </Apdex>
        <Name> {app.name}</Name>
      </App>
    ))}
  </Wrapper>
);

Card.defaultProps = {
  layout: "list"
};

Card.propTypes = {
  host: string.isRequired,
  layout: oneOf(["list", "grid"]),
  apps: arrayOf(
    shape({
      apdex: number.isRequired,
      name: string.isRequired,
      version: number.isRequired
    })
  ).isRequired,
  index: number,
  onShowToastMessage: func.isRequired
};

export { Card };
