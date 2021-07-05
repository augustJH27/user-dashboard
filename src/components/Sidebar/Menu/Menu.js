import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Hubungi Kami" icon={'phone'}/>
            <MenuLink title="Tentang Kami" icon={'home'}/>
            <MenuLink title="Kebijakan Privasi" icon={'file-multiple'}/>
            <MenuLink title="Pengaturan" icon={'cog'} />
            <MenuLink title="Keluar" icon={'power'} />
        </Container>
    )
}

export default Menu;