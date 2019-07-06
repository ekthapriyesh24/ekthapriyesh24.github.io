import React from 'react';
import mypic2 from './mypic2.jpg';
//import logo from './logo.svg';
import './style.Home.css';
import GoogleFlex from './GoogleFlex.js';

function Home() {
  return (
    <div className="Home container-fluid">
      <div className="flex-container1">
      <div className="test flex-container1" style={{marginTop:"100px"}}>
        <img src={mypic2} className="rounded-circle" height="285" width="290" alt="alt"></img>
      </div>
      </div>
      <GoogleFlex names="Priyesh-Raj" size="s1" googlehoveropt="googlehover" py="py-3" px="px-2" my="my-2"/>
      <div className="flex-container1">
      <span className="m-2 p-2 s3 googlehover text-light">@ekthapriyesh24</span>
      </div>
      <div className="flex-container1">
      <span className="m-2 p-2 s3 googlehover text-light">Eat | Sleep | Code | Repeat</span>
      </div>
      <div className="ard m-1 flex-container1">
        <a href="#root1" className="m-2 arrow"></a>
      </div>
    </div>
  );
}

export default Home;
