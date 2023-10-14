import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
const HeaderFooter = (props:any) => {
  const { activeIndex } = props;

  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default HeaderFooter;
