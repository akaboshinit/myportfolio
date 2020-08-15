import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { H2 } from '../css/index'

const About = (props : any) => {

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
    </>
  )
}

// About.getInitialProps = async ( ctx : any ) => {
//   let pathname = ''
//   if( !ctx.req ){
//     pathname = ctx.pathname;
//     // const f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
//     // function loop() {
//     //   location.hash = f[Math.floor((Date.now()/100)%f.length)];
//     //   setTimeout(loop, 50);
//     // }
//     // loop();
//   }
//   return { pathname:pathname , stars: Math.random() }
// }

export default About;