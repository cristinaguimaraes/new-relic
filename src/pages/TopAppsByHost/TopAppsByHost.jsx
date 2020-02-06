import React from "react";
import { Card } from "components/Card";
import { Content, Header, Text } from "./styled";
import { arrayOf, number, shape, string } from "prop-types";
import { Redirect } from "react-router-dom";

const TopAppsByHost = ({ data }) => {
  const [, , id] = window.location.pathname.split("/");

  if (!data || Object.keys(data).length === 0) return <Redirect to="/" />;

  return (
    <Content>
      {data[id] ? (
        <>
          <Header>Top 25 Apps</Header>
          <Card host={id} apps={data[id].slice(0, 25)} />
        </>
      ) : (
        <Text>Sorry, this host is not in the list!</Text>
      )}
    </Content>
  );
};

TopAppsByHost.propTypes = {
  data: shape({
    string: arrayOf(
      shape({
        host: arrayOf(string).isRequired,
        name: string.isRequired,
        apdex: number.isRequired,
        version: number.isRequired
      })
    )
  }).isRequired
};

export { TopAppsByHost };
