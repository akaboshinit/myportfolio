import React from 'react';
import Link from 'next/link';
import css from 'styled-components';

const Index = (props : any) => {
console.log('Render!!')
return (
    <>
    <div>
        HomePage
    </div>
    </>
)
}

// Index.getInitialProps = async ({ res }:any) => {
//   if (res) {
//     res.writeHead(302, { Location: '/category/about' });
//     res.end();
//   }
// }

export default Index;