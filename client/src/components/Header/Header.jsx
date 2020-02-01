import React from 'react';
import { func, oneOf } from 'prop-types';
import {Title, Subtitle, SubTitle, Wrapper, Icon} from './styled';

 const Header = ({onClick, layout}) => {


    return (
        <Wrapper>
            <Title>Apps by Host</Title>
            <SubTitle>for user averylongemailaddress@companyname.com</SubTitle>
            <Icon className={'material-icons'}  onClick={onClick}>
                check_box_outline_blank
            </Icon>
            <SubTitle>Show as {layout}</SubTitle>
        </Wrapper>
    )
};

Header.propTypes = {
    onClick: func.isRequired,
    layout: oneOf(['list', 'grid']).isRequired
};

export { Header};