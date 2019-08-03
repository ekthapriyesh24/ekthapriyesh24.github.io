import React from 'react';
import mypic2 from './mypic2.jpg';
//import logo from './logo.svg';
import './style.Home.css';
import GoogleFlex from './GoogleFlex.js';

function Home() {
  return (
    <div className="Home">
      <div className="flex-container1">
      <div className="flex-container1">
        <img src={mypic2} className="test" alt="alt"></img>
      </div>
      </div>
      <GoogleFlex names="Priyesh-Raj" size="s1" googlehoveropt="googlehover" py="py-2" px="px-2" my=""/>
      <div className="flex-container1">
        <span className="my-2 s3 googlehover text-light audio">@ekthapriyesh24</span>
      </div>
      <div className="flex-container1">
        <span className="s3 googlehover text-light audio">Eat | Sleep | Code | Repeat</span>
      </div>
      <div className="ard my-1 flex-container1 my-2">
        <a href="#root11" className="my-2 arrow"></a>
      </div>
    </div>
  );
}

export default Home;
