import React, { useState,useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link';
import Router, { useRouter } from 'next/router'

import styled, { ThemeProvider } from 'styled-components'
import '../@types/styled.d.ts';
import { H1,A,Link_h2,Main_img,Icon } from '../styled/index'

import { dir } from '../env' //path_check
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

    const [click, toggle] = useState(false)
    useEffect(() => {
        console.log('click:'+{click}.click+':'+currentpath)
    },[click]);

    const a = () => {
        let animes:any = document.getElementsByClassName('animated')
        if( {click}.click == false ){
            for( let i = 0; animes.length > i; i++ ){
                const randomnum = Math.floor(Math.random()*animes.length)
                setTimeout(()=>{animes[randomnum].classList.add('hinge')},i*250)
            }
        }
        if( {click}.click == true ){
            for( let i = 0; animes.length > i; i++ ){
                animes[i].classList.remove('hinge');
            }
        }
        toggle(!click)
    }

    return (
    <>
    <Head>
        <title>akaboshinit</title>
        <meta name="description" content="akaboshinitのportfolioやで" />
    </Head>
    <ThemeProvider theme={theme}>
        <Article>
        <Input value="anime" type="button"onClick={()=>a()} />
            <Box>
                <Divpro>
                    <Main_img className="animated" width="180px" height="180px" src={dir+'/images/main_circle.min.png'} alt="icon-image" />
                    <H1 className="animated">akaboshinit</H1>
                </Divpro>
                <List>
                    <Link href="/category/about" as={dir+'/category/about'}>
                        <Link_h2 className="animated" currentpath={About}>About</Link_h2>
                    </Link>
                    <div></div>
                    <Link href="/category/profile" as={dir+'/category/profile'}>
                        <Link_h2 className="animated" currentpath={Profile}>Profile</Link_h2>
                    </Link>
                    <div></div>
                    <Link href="/category/task" as={dir+'/category/task'}>
                        <Link_h2 className="animated" currentpath={Task}>Task</Link_h2>
                    </Link>
                    <div></div>
                    <Link href="/category/others" as={dir+'/category/others'}>
                        <Link_h2 className="animated" currentpath={Others}>Others</Link_h2>
                    </Link>
                    <div></div>
                </List>
                <Icons >
                    <A href="https://www.instagram.com/akaboshinit/?hl=ja"><Icon className="animated fab fa-2x fa-instagram"></Icon></A>
                    <A href="https://twitter.com/akaboshinit"><Icon className="animated fab fa-2x fa-twitter"></Icon></A>
                    <A href="https://www.facebook.com/people/Akaboshi/100054261799304"><Icon className="animated fab fa-2x fa-facebook"></Icon></A>
                    <A href="https://github.com/akaboshinit"><Icon className="animated fab fa-2x fa-github"></Icon></A>
                </Icons>
                <Divplece>
                    <Card >
                        <Component {...pageProps} />
                    </Card>
                </Divplece>
            </Box>
        </Article>
    </ThemeProvider>
    </>
    )
}
// className="animated hinge slower"

export default MyApp

const Input = styled.input`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    z-index: 10;
`

const theme = ({
    colors:{
        main:  '#525252',
        bg: '#FDFAF7',
        hover: 'black'
    },
    link_colors:{
        hover_color: '#E5E5E5',
        bg_color: '#E5E5E5'
    }
})

const Article = styled.article`
    /* overflow: hidden; */
    width:  100%;
    height: 100vh;
    background-color:  ${(props) => (props.theme.colors.bg)};
    display: grid;
    place-items: center;
    @media (max-width: 750px) {
        /* height: 100%; */
        overflow: visible;
        place-items: start;
    }
`

const Box = styled.div`
    color: ${(props) => (props.theme.colors.main)};
    font-family: 'Lato,Noto Sans Japanese, sans-serif';
    font-size: 1em;
    cursor: default;
    display: grid;
    grid-template-columns: 220px 550px;
    grid-template-rows: 220px 220px 110px;
    @media (max-width: 750px) {
        width: 100vw;
        display: inline;
    }
    /* center */
    /* position: relative;
    top: 75%;
    left: 75%;
    transform: translate(-50%,-50%); */
    /*  */
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
        display: flex;
        margin: 40px 0;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        justify-content: space-around;
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
        margin: 30px 0;
        width: 80%;
    }
`

const Divplece = styled.div`
    grid-column: 2/3;
    grid-row: 1/4;
    position:relative;
`

const Card = styled.div`
    width: 600px;
    height: 550px;
    color: ${(props) => (props.theme.colors.main)};
    font-family: 'Lato, Noto Sans Japanese, sans-serif';
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display:none;
    }
    @media (min-width: 750px) {
        &::after {
            position: absolute;
            width: 600px;
            height: 551px;
            top: 0 ; left: 0; right: 0; bottom: 0;
            -moz-box-shadow: inset 0px 0px 10px 10px ${(props) => (props.theme.colors.bg)};
            -webkit-box-shadow: inset 0px 0px 10px 10px ${(props) => (props.theme.colors.bg)};
            box-shadow: inset 0px 0px 10px 10px ${(props) => (props.theme.colors.bg)};
            content: "";
        }
    }
    @media (max-width: 750px) {
        width: 100%;
        overflow-y: visible;
    }
`