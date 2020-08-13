import * as React from 'react'
import App, { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link';

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
    // backgroundColor: 'grey',
    width: '770px',
    height: '550px',
    color: '#525252',
    fontFamily: 'Lato, "Noto Sans Japanese", sans-serif;',
    fontSize: '1em',
    cursor: 'default',
    //center
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    //
    display: 'grid',
    gridTemplateColumns: '220px 550px',
    gridTemplateRows: '1fr 1fr 0.6fr'
})

const Divpro = css.div({
    gridColumn: '1/2',
    gridRow: '1/2',
    textAlign: 'center'
})
const dir = String(process.env.BACKEND_URL) + 'images/main.jpg'
console.log(String(process.env.BACKEND_URL))
console.log(dir)
const Img = css.img({
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    border: '1px solid black',
    marginTop: '20px',
})

const Title = css.h1({
    color: '#525252',
    fontSize: '1.5em',
    fontFamily: '"Noto Sans Japanese",Roboto Condensed, sans-serif;',
    lineHeight: '20px',
    fontWeight: 'normal',
    marginTop: '10px'
})

const Ul = css.ul({
    gridColumn: '0/1',
    gridRow: '2/3',
    margin: '30px 0px 0px 30px'
})

const A = css.a({
    lineHeight: '29px',
    letterSpacing: '3px'
})

const Icons = css.ul({
    gridColumn: '0/1',
    gridRow: '3/4',
    display: 'flex',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '160px',
    justifyContent: 'space-around'
})

const I = css.i({
    fontSize: '30px'
})

const Move = css.article({
    color: '#525252',
    fontFamily: 'Lato, "Noto Sans Japanese", sans-serif;',
    gridColumn: '2/3',
    gridRow: '1/4',
    border: 'black solid 1px',
    width: '550px',
    height: '550px'
})

class MyApp extends App {
render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props
    return (
    <>
    <Head>
        <title>akaboshinit</title>
        <link rel="icon" type="image/jpg" href="/icon.jpg"></link>
    </Head>
    <ThemeProvider theme={theme}>
        <Article>
            <Box>
                <Divpro>
                    <Img />
                    <Title>akaboshinit</Title>
                </Divpro>
                <Ul>
                    {/* <Link href="/" as={process.env.BACKEND_URL + '/'}>
                        <A>Home</A>
                    </Link> */}
                    <div></div>
                    <Link href="/category/about" as={process.env.BACKEND_URL + '/category/about'}>
                        <A>About</A>
                    </Link>
                    <div></div>
                    <Link href="/category/profile" as={process.env.BACKEND_URL + '/category/profile'}>
                        <A>Profile</A>
                    </Link>
                    <div></div>
                    <Link href="/category/task" as={process.env.BACKEND_URL + '/category/task'}>
                        <A>Task</A>
                    </Link>
                    <div></div>
                    <Link href="/category/others" as={process.env.BACKEND_URL + '/category/others'}>
                        <A>Others</A>
                    </Link>
                    <div></div>
                </Ul>
                <Icons>
                    <I className="fab fa-instagram"></I>
                    <I className="fab fa-twitter"></I>
                    <I className="fab fa-facebook"></I>
                    <I className="fab fa-github"></I>
                </Icons>
                <Move>
                    <Component {...pageProps} />
                </Move>
            </Box>
        </Article>
    </ThemeProvider>
    </>
    )
}
}

export default MyApp