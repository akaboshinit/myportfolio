import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Img_card } from '../../components/index';

const Works = () => {

return (
<>
    <Div>
        <Img_card
            className="slide"
            img="room.jpg"
            title="大学通知LINE.bot"
            content="大学のポータルサイトの.通知の利便性を改善すべく、.LINEと連携して随時通知を送る.プログラム"
        />
        <Img_card
            className="slide"
            img="room.jpg"
            title="bb"
            content="aa"
        />
        <Img_card
            className="slide"
            img="room.jpg"
            title="bb"
            content="aa"
        />
        <Img_card
            className="slide"
            img="room.jpg"
            title="bb"
            content="aa"
        />
        <Img_card
            className="slide"
            img="room.jpg"
            title="bb"
            content="aa"
        />
    </Div>
    {/* <style jsx global>
        {`
            .slide {
                opacity: 0;
                transform: translateY(60px);
                transition: opacity 1s, transform 0.8s;
            }
            .show {
                opacity: 1;
                transform: translateY(0);
            }
        `}
    </style> */}
</>
)
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default Works;