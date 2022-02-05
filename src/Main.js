import React from 'react';
import Footer from './Footer';
import Appbar from './Appbar';
import Cards from './Cards';
import Button1 from './Button1';

function Main() {
  return <div>
      {/* <Link to="/"></Link> */}
      <Appbar></Appbar>
      <Cards></Cards>
      <Button1></Button1>
      <Footer></Footer>
  </div>;
}

export default Main;
