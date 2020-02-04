import styled from 'styled-components';

export const TextWrapper = styled.div`
  width: 100%;
  box-shadow: 0 2px 12px 4px rgba(0, 0, 0, 0.19);
  border-radius: 6px;
  color: white;
  justify-content: flex-start;
  flex-direction: row;
  padding: 16px;
  display: flex;
  align-items: center;
  background-color: green;
`;

export const Text = styled.span`
  margin-left: 8px
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
