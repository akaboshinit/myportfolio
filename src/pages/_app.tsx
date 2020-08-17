import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link';
import Router, { useRouter } from 'next/router'

import styled, { ThemeProvider } from 'styled-components'
import '../@types/styled.d.ts';
import { H1,A,Link_h2,Img,Icon,Card } from '../styled/index'

const dir = String(process.env.BACKEND_URL); //path_check
import * as gtag from '../gtag'              //google_analytics
Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const MyApp = ({ Component, pageProps }: AppProps ) => {
    const router = useRouter();
    const pathname = router.pathname;
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
    const aa = () =>{
        console.log('click')
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
                    <Img width="180px" height="180px" src={dir+'/images/main_circle.png'} />
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
                        <Input type="button"onClick={()=>aa()} />
                        <Component {...pageProps} />
                    </Card>
                </Divprece>
                <div>aaa</div>
            </Box>
        </Article>
    </ThemeProvider>
    </>
    )
}

// export const getStaticProps = async (context:any) => {
//     const build_time = new Date().toString();
//     return {
//         props: {
//             build_time
//         },
//     }
// }

export default MyApp

const Input = styled.input`
    width: 50px;
`

const theme = ({
    colors:{
        light:  'white' 
    },
})

const Article = styled.article`
    background-color:  #FDFAF7 ;
    width:  100%;
    height: 100%;
`

const Box = styled.div`
    background-color:  #FDFAF7 ;
    width: 770px;
    height: 550px;
    color: #525252;
    font-family: 'Lato,Noto Sans Japanese, sans-serif';
    font-size: 1em;
    cursor: default;
    /* center */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /*  */
    display: grid;
    grid-template-columns: 220px 550px;
    grid-template-rows: 1fr 1fr 0.3fr;
    @media (max-width: 750px) {
        width: 100%;
        height: auto;
        display: inline;
        top: 0;
        left: 0;
        transform: none;
        /* grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 0.3fr 0.1fr 1fr; */
    }
`

const Divpro = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    text-align: center;
    @media (max-width: 750px) {
        height: 220px;
        padding-top: 50px
    }
`

const List = styled.ul`
    box-sizing: border-box;
    grid-column: 0/1;
    grid-row: 2/3;
    margin: 30px 0px 0px 30px;
    @media (max-width: 750px) {
        /* display: flex; */
    }
`

const Icons = styled.ul`
    grid-column: 0/1;
    grid-row: 3/4;
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    justify-content: space-around;
    @media (max-width: 750px) {
    }
`

const Divprece = styled.div`
    grid-column: 2/3;
    grid-row: 1/4;
    border: black 1px solid;
    width: 550px;
    height: 550px;
    @media (max-width: 750px) {
        width: 100%;
    }
`