import React from 'react';
import { func, oneOf } from 'prop-types';
import {Title, Wrapper, Icon, Text} from './styled';

const Header = ({onClick, layout}) =>  (
   <Wrapper>
     <Title>Apps by Host</Title>
     <Text>for user averylongemailaddress@companyname.com</Text>
     <Icon className={'material-icons'}  onClick={onClick}>
       check_box_outline_blank
     </Icon>
     <Text>Show as {layout}</Text>
   </Wrapper>
);


Header.propTypes = {
    onClick: func.isRequired,
    layout: oneOf(['list', 'grid']).isRequired
};

export { Header};