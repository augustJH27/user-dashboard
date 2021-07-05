const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(122deg, rgba(0,175,145,1) 0%, rgba(0,121,101,1) 100%)',
    colorGreen: '#00af91',
    colorGray: '#000000',
}

export const lightTheme = {
    primary: '#FFF',
    secondary: '#00af91',
    textColor: '#000000',
    header: '#000000',
    headerNumber: '#FFF',
    activeMenu: '#000000',
    ...globalTheme
}

export const darkTheme = {
    primary: '#302C40',
    secondary: '#007965',
    textColor: '#FFF',
    header: '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    ...globalTheme
}