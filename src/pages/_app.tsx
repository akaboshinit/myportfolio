import * as React from 'react'
import App, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import Link from 'next/link';
import css, { ThemeProvider } from 'styled-components'
import { H1,A,Link_h2,Img,Icon,Card } from '../styled/index'
const dir = String(process.env.BACKEND_URL);

import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const pathname = useRouter().pathname;
    const currentpath = pathname.substr(pathname.lastIndexOf('/')+1);
    let About,Profile,Task,Others = false;
    switch(currentpath){
        case 'about':
            About = true;
            break
        case 'profile':
            Profile = true;
            break
        case 'task':
            Task = true;
            break
        case 'others':
            Others = true;
            break
        default:
    }

    return (
    <>
    <Head>
        <title>akaboshinit</title>
    </Head>
    <ThemeProvider theme={theme}>
        <Article>
            <Box>
                <Divpro>
                    <Img width="180px" height="180px" src={dir+'/images/main.jpg'} />
                    <H1>akaboshinit</H1>
                </Divpro>
                <List>
                    <Link href="/category/about" as={dir+'/category/about'}>
                        <Link_h2 currentpath={About}>About</Link_h2>
                    </Link>
                    <div></div>
                    <Link href="/category/profile" as={dir+'/category/profile'}>
                        <Link_h2 currentpath={Profile}>Profile</Link_h2>
                    </Link>
                    <div></div>
                    <Link href="/category/task" as={dir+'/category/task'}>
                        <Link_h2 currentpath={Task}>Task</Link_h2>
                    </Link>
                    <div></div>
                    <Link href="/category/others" as={dir+'/category/others'}>
                        <Link_h2 currentpath={Others}>Others</Link_h2>
                    </Link>
                    <div></div>
                </List>
                <Icons>
                    <A href="https://www.instagram.com/akaboshinit/?hl=ja"><Icon className="fab fa-2x fa-instagram"></Icon></A>
                    <A href="https://twitter.com/akaboshinit"><Icon className="fab fa-2x fa-twitter"></Icon></A>
                    <A href="a"><Icon className="fab fa-2x fa-facebook"></Icon></A>
                    <A href="https://github.com/akaboshinit"><Icon className="fab fa-2x fa-github"></Icon></A>
                </Icons>
                <Divprece>
                    <Card>
                        <div>{currentpath}</div>
                        <Component {...pageProps} />
                    </Card>
                </Divprece>
            </Box>
        </Article>
    </ThemeProvider>
    </>
    )
}

MyApp.getInitialProps = ({ctx}:any) => {
    // if( !ctx.res ){
    //     const pathname = ctx.pathname;
    //     const currentpath = pathname.substr(pathname.lastIndexOf('/')+1);
    //     let timeout;
    //     let f :any = [];

    //     clearTimeout(timeout)
    //     function loop() {
    //         location.hash = f[Math.floor((Date.now()/100)%f.length)];
    //         // timeout = setTimeout(loop,500);
    //         console.log(f)
    //     }
    //     loop()

    //     switch(currentpath) {
    //         case 'about' :
    //             f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
    //             break
    //         case 'profile' :
    //             f = ['1','2','3','4','5','6','8','9'];
    //             break
    //         case 'task' :
    //             f = ['a','d','e','v','e','y','i','p'];
    //             break
    //         case 'others' :
    //             f = ['as','cd','vf','hy','ki',';;','l;','99'];
    //             break
    //     }
    // }
    return { a:'aa' }
}

export default MyApp


const theme = ({
    light: 'white',
    dark: 'black'
})

const Article = css.article({
    backgroundColor: '#FDFAF7',
    width: '100%',
    height: '100vh'
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
    gridTemplateRows: '1fr 1fr 0.3fr'
})

const Divpro = css.div({
    gridColumn: '1/2',
    gridRow: '1/2',
    textAlign: 'center'
})

const List = css.ul({
    boxSizing: 'border-box',
    gridColumn: '0/1',
    gridRow: '2/3',
    margin: '30px 0px 0px 30px'
})

const Icons = css.ul({
    gridColumn: '0/1',
    gridRow: '3/4',
    display: 'flex',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '150px',
    justifyContent: 'space-around'
})

const Divprece = css.div({
    gridColumn: '2/3',
    gridRow: '1/4',
})