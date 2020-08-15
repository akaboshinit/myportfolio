import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { H2 } from '../../styled/index'

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

// About.getInitialProps = async ( {ctx} : any ) => {
//   return { a:'a' }
// }

export default About;