import React from 'react'
import styled from 'styled-components';
import './Nav.css';

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

// const ProfileImg = styled.img`
//     height: 2rem;
//     margin: 0 1rem;
//     cursor: pointer;
// `

// const MessageIcon = styled.span`
//     color: ${({ theme }) => theme.colorGray}; 
//     font-size: 27px;
//     cursor: pointer;
// `
const Nav = () => {
    return (
        <Container>
            <h1 className="title-content">TEST</h1>
            {/* <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon>
            <ProfileImg src={require('../../assets/images/profilelg.png')} /> */}
        </Container>
    )
}

export default Nav