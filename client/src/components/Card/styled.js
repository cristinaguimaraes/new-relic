import styled from 'styled-components';

export const Host = styled.div`
font-size: 16px;
font-family: 'Helvetica Bold';
color: #000000;
line-height: 19px;
margin-bottom: 23px;
`;

export const App = styled.div`
display: flex;
`;

export const Wrapper = styled.div`
display:flex;
  width: calc(${props => 100 / 12} * 100%);
max-width: ${props => (props.layout === 'grid' ? '315px' : 'null')};
padding: 30px;
flex-direction: column;
background-color: white;
margin-top: 30px
`;

export const Apdex = styled.div`
color: #4A4A4A;
opacity: 62%;
font-size: 13px;
font-family: 'Helvetica Bold';
line-height: 19px;
width: 22px;
`;

export const Name = styled.div`
color: #4A4A4A;
font-size: 16px;
font-family: 'Helvetica';
line-height: 19px;
margin-left: 10px
`;
