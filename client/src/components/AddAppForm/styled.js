import styled from 'styled-components';

export const Helper = styled.span`
 display: block;
 color: red;
 margin-top: 4px;
 font-family: 'Helvetica Bold';

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const Input = styled.input`
font-family: 'Helvetica';
height: 48px;
min-height: 48px;
`;

export const Label = styled.label`
font-family: 'Helvetica Bold';
margin-top: 15px;
margin-bottom: 5px;
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  border-radius: 4px;
  margin-top: 24px;
  border: solid 1px

`;

export const ButtonWrapper = styled.div`
width: 100%;
display:flex;
justify-content:center
`;

export const Button = styled.button`
width: 80px;
margin-top: 15px;
border-radius: 6px;
height: 40px;
`;

export const Title = styled.div`
font-size: 35px;
font-family: 'Helvetica Bold';
color: #000000;
line-height: 43px;
margin-bottom: 15px;
text-align: center
`;

