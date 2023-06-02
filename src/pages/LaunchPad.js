import React from "react";
import Header from '../components/Header';
import TopText from '../components/TopText';
import AlertBox from '../components/AlertBox';
import GridBox from '../components/GridBox';

function LaunchPad() {

  return (
    <>
      <Header />
      <div className='px-6 sm:px-8 md:px-16 lg:px-40 xl:px-40' style={{width:"95%", margin:"auto"}}>
        <TopText />
        <AlertBox />
        <GridBox />
      </div>
    </>
  )
}

export default LaunchPad;