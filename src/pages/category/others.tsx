import React from 'react';
import Link from 'next/link';
import css from 'styled-components';

const Others = (props : any) => {
return (
<>
    <div>
        Others
    </div>
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