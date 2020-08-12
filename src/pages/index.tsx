import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import css from 'styled-components';

const Home = () => (
  <>
    <Head>
      <title>あかぼしportfolio</title>
      <meta name="google-site-verification" content="XoOrJUFaeFmuY6WXOhRp40t9FrM-FWHu73TX7fLW7Eg" />
    </Head>
    <div>
      Hello World.{' '}
      <div></div>
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <div></div>
      <Link href="/sitemap" as={process.env.BACKEND_URL + '/sitemap'}>
        <a>sitemap</a>
      </Link>
      {/* <H1>aaaa</H1>
      <Div>wwwww</Div> */}
    </div>
  </>
)

const H1 = css.h1({
  backgroundColor: 'red'
})

const Div = css.div({
  backgroundColor: 'blue'
})

export default Home;
