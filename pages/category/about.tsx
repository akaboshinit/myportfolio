import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const About = (props : any) => {

  console.log(props)

  // const f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
  // function loop() {
  //   location.hash = f[Math.floor((Date.now()/100)%f.length)];
  //   setTimeout(loop, 50);
  // }
  // loop();

  return(
    <>
      <Head>
        <title>あportfolio</title>
        <meta name="google-site-verification" content="XoOrJUFaeFmuY6WXOhRp40t9FrM-FWHu73TX7fLW7Eg" />
      </Head>
      <div>Hello World.{' '}aaa</div>
      <Link href="/" as={process.env.BACKEND_URL + '/'}>
        <a>Home</a>
      </Link>
      <h1>あああああああああああああ</h1>
    </>
  )
}

export default About;