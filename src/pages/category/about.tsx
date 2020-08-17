import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { H2 } from '../../styled/index'

const About = ( props:any ) => {
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
      <div>aaa</div>
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

export default About;