import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
  <>
    <Head>
      <title>あかぼしportfolio</title>
      <meta name="google-site-verification" content="XoOrJUFaeFmuY6WXOhRp40t9FrM-FWHu73TX7fLW7Eg" />
    </Head>
    <div>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <div></div>
      <Link href="/sitemap" as={process.env.BACKEND_URL + '/sitemap'}>
        <a>sitemap</a>
      </Link>
    </div>
  </>
)

export default Home;
