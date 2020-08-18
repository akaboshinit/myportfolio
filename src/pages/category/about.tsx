import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components'
import { Img_s,Img_m,Img_l,Skill_card } from '../../styled/index'
import { dir,s_size,m_size_w,m_size_h,l_size } from '../../env'

const About = () => {
  return(
    <>
      <Head>
        <title>akaboshi-portfolio</title>
      </Head>
      <Div className="animated zoomInDown">
        <Skill_card>
          <Img_s className="animated" width={s_size} height={s_size} src={dir+'/images/room.jpg'} alt="icon-image" />
        </Skill_card>
        <Skill_card>
          <Img_s className="animated" width={s_size} height={s_size} src={dir+'/images/room.jpg'} alt="icon-image" />
        </Skill_card>
        <Skill_card>
          <Img_s className="animated" width={s_size} height={s_size} src={dir+'/images/room.jpg'} alt="icon-image" />
        </Skill_card>
        <Skill_card>
          <Img_s className="animated" width={s_size} height={s_size} src={dir+'/images/room.jpg'} alt="icon-image" />
        </Skill_card>
        <Skill_card>
          <Img_s className="animated" width={s_size} height={s_size} src={dir+'/images/room.jpg'} alt="icon-image" />
        </Skill_card>
        <Skill_card>
          <Img_s className="animated" width={s_size} height={s_size} src={dir+'/images/room.jpg'} alt="icon-image" />
        </Skill_card>
        <Skill_card>
          <Img_s className="animated" width={s_size} height={s_size} src={dir+'/images/room.jpg'} alt="icon-image" />
        </Skill_card>
        {/* <Img_m className="animated" width={m_size_w} height={m_size_h} src={dir+'/images/room.jpg'} alt="icon-image" />
        <Img_l className="animated" width={l_size} height={l_size} src={dir+'/images/room.jpg'} alt="icon-image" /> */}
      </Div>
    </>
  )
}

// About.getInitialProps = async ( ctx : any ) => {
//   // if( !ctx.req ){
//   //   const f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
//   //   function loop() {
//   //       location.hash = f[Math.floor((Date.now()/100)%f.length)];
//   //       // timeout = setTimeout(loop,500);
//   //       console.log(f)
//   //   }
//   //   loop()
//   // }
//   return { a:'a' }
// }

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default About;