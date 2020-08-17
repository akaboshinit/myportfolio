import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router'

const Index = (props : any) => {
  console.log('Render!!');
  useEffect(() => { //redirect
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/category/about')
    }
  });
  return (
    <>
      <div>
        HomePage
      </div>
    </>
  )
}

export default Index;