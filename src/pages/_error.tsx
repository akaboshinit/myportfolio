import React from 'react';
import Link from 'next/link';
import { H2 } from './css/index'
import css from 'styled-components';
const dir = String(process.env.BACKEND_URL)

const Error = (props : any) => {
    console.log('Render!!')
    return (
    <C>
        <Center>
            <div>404.<br />エラーが起きました<br />ページがありません</div>
            <Link href="/category/about" as={dir+'/category/about'}>
                <H2><br />TOPページに戻る、、</H2>
            </Link>
        </Center>
    </C>
    )
}

const C = css.div({
    position: 'relative',
    top: '50%'
}) 

const Center = css.div({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '1.5em',
    textAlign: 'center',
}) 

export default Error;