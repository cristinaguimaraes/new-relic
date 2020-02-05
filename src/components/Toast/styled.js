import styled from "styled-components";

export const TextWrapper = styled.div`
  width: 50%;
  box-shadow: 0 2px 12px 4px rgba(0, 0, 0, 0.19);
  border-radius: 6px !important;
  justify-content: flex-start;
  flex-direction: row;
  padding: 16px;
  display: flex; 
  align-items: center;
  background-color: ${props => (props.type === 'failure' ? 'red' : 'green')};
  color: white;
`;

export const Text = styled.span`
  margin-left: 8px;
`;
