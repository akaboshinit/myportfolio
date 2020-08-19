import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Others = (props : any) => {
return (
<>
    <div>
        Others
    </div>
    <div className="slide">image</div>
    <style jsx >
        {`
            .slide {
                opacity: 0;
                transform: translateY(60px);
                transition: opacity 1s, transform 0.8s;
            }
            .slide_show {
                opacity: 1;
                transform: translateY(0);
            }
        `}
    </style>
</>
)
}

Others.getInitialProps = async ( ctx : any ) => {
if( !ctx.req ){
    // console.log(ctx)
    // function loop() {
    //     var i, n, s = '';
    //     for (i = 0; i < 10; i++) {
    //         n = Math.floor(Math.sin((Date.now()/200) + (i/2)) * 4) + 4;
    //         s += String.fromCharCode(0x2581 + n);
    //     }
    //     window.location.hash = s;
    //     console.log(999)
    //     setTimeout(loop, 500);
    // }
    // loop();
}
return { a:'a' }
}

export default Others;