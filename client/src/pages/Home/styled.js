import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

export const Content= styled.div`
width: 840px;
display:flex;
justify-content: center;
padding: 30px;
flex-direction: column;
background-color: #F8F8F8
`;

export const Link = styled(ReactLink)`
font-family: 'Helvetica';
`
