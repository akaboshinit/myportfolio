import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Others = (props : any) => {

    useEffect(() => { 
        const options:any = {
            root: null,
            rootMargin: "0px 0px -200px",
            threshold: 0
        }
        const slide = document.querySelectorAll('.slide')
        slide.forEach((target) => onIntersect(target,options))
        function onIntersect(target:any, options = {}) {
            const observer = new IntersectionObserver(addShowClass, options)
            observer.observe(target)
        }
        function addShowClass(entries:any) {
            for(const e of entries) {
                if (e.isIntersecting) {
                    e.target.classList.add("slide_show")
                }
            }
        }
    },[]);

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