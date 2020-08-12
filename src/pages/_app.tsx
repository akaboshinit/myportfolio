import * as React from 'react'
import App, { AppProps } from 'next/app'

import css, { ThemeProvider } from 'styled-components'
const theme = ({
    light: 'white',
    dark: 'black'
})

const Article = css.article({
    backgroundColor: '#FDFAF7',
    width: '100%',
    height: '100vh',
})

const Box = css.div({
    backgroundColor: 'grey',
    width: '750px',
    height: '550px',
    color: '#525252',
    fontFamily: 'Lato, "Noto Sans Japanese", sans-serif;',
    //真ん中
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    //
    display: 'grid',
    gridTemplateColumns: '0.2fr 1fr',
    gridTemplateRows: '0.8fr 1fr 0.2fr'
})

const Divpro = css.div({
    gridColumn: '1/2',
    gridRow: '1/2',
})

const Img = css.img({
})

const Title = css.h1({
    color: '#525252',
    fontSize: '1.3em',
    fontFamily: 'Noto Sans Japanese',
    lineHeight: '20px',
    fontWeight: 'normal',
})

const Ul = css.ul({
    gridColumn: '0/1',
    gridRow: '2/3',
})

const Icons = css.ul({
    gridColumn: '0/1',
    gridRow: '3/4',
})

const Move = css.article({
    color: '#525252',
    fontFamily: 'Lato, "Noto Sans Japanese", sans-serif;'
})

class MyApp extends App {
render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props
    return (
    <ThemeProvider theme={theme}>
        <Article>
            <Box>
                <Divpro>
                    <Img src="/static/fukurou.png" />
                    <Title>akaboshi</Title>
                </Divpro>
                <Ul>
                    <li>aaaa</li>
                    <li>5555</li>
                    <li>acasa</li>
                </Ul>
                <Icons>
                    <li>insta</li>
                    <li>twi</li>
                    <li>face</li>
                </Icons>
                <Move>
                    <Component {...pageProps} />
                </Move>
            </Box>
        </Article>
    </ThemeProvider>
    )
}
}

export default MyApp