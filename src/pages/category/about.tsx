import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { H2 } from '../../styled/index'

const About = ( props:any ,{ time }:any) => {
  console.log({time})
  const timea = {time}.time
  return(
    <>
      <Head>
        <title>akaboshi-portfolio</title>
      </Head>
      <div>Hello World.{' '}aaa</div>
      <Link href="/" as={process.env.BACKEND_URL + '/'}>
        <a>Home</a>
      </Link>
      <H2>{props.pathname}</H2>
      <div>{timea}aaa</div>
    </>
  )
}

// About.getInitialProps = async ( ctx : any ) => {
//   // if( !ctx.req ){
//   //   const f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
//   //   function loop() {
//   //       location.hash = f[Math.floor((Date.now()/100)%f.length)];
//   //       // timeout = setTimeout(loop,500);
//   //       console.log(f)
//   //   }
//   //   loop()
//   // }
//   return { a:'a' }
// }
export const getStaticProps = async (context:any) => {
  const time = new Date().toString();
  return{
    props: {
      time
    }
  }
}

export default About;