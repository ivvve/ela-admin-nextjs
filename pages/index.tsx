import React, {useEffect} from 'react'
import Router from 'next/router';

export default function Home() {
  useEffect(function () {
    Router.push('/dashboard');
  });

  return (
    <>
      Loading...
    </>
  )
}
