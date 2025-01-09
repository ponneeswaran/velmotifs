
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 768);
  }, []);

  if(isLargeScreen){
  return(
    <header>
      <h1>Vel Motifs</h1>
      <h3>Aari - Embroidery - Stichings</h3>
    </header>
  );
  }else{
    <></>
  }
}
  
export default Header;