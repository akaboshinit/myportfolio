import React from 'react';
import { Img_s,Card_frame,Title,Contents } from '../styled/index'
import { dir,s_size } from '../env'

interface Img_card {
    className: string,
    img: string,
    title: string,
    content: string
}

const Img_card:React.FC<Img_card> = (props:any) => {
    let line = props.content.split('.')
return(
<>
    <Card_frame className={props.className}>
        <Img_s width={s_size} height={s_size} src={dir+'/images/'+props.img} alt="image" />
        <Title>{props.title}</Title>
        {line.map((array:string ,index:number)=>{
            return <Contents key={index.toString()}>{array}</Contents>
        })}
    </Card_frame>
</>
)
}

export default Img_card