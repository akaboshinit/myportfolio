import React from 'react';
import Link from 'next/link';
import css from 'styled-components';

const Home = (props : any) => {

  console.log('Render!!')

//   function loop() {
//     var i, n, s = '';
//     for (i = 0; i < 10; i++) {
//         n = Math.floor(Math.sin((Date.now()/200) + (i/2)) * 4) + 4;
//         s += String.fromCharCode(0x2581 + n);
//     }
//     window.location.hash = s;
//     setTimeout(loop, 50);
// }
// loop();

  return (
    <>
      <div>
      </div>
    </>
  )
}

const H1 = css.h1({
  backgroundColor: 'red'
})

const Div = css.div({
  backgroundColor: 'blue'
})

export default Home;