import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Content = styled.div`
  width: 840px;
  display: flex;
  justify-content: center;
  padding: 30px;
  flex-direction: column;
  background-color: #f8f8f8;
  align-items: center;
`;

export const Link = styled(ReactLink)`
  font-size: 35px;
  font-family: "Helvetica Bold";
  color: #000000;
  line-height: 43px;
`;
