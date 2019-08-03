import React from 'react';
import './style.About.css';
import GoogleFlex from './GoogleFlex.js';

function About() {
  return (
    <div className="About">
      <div className="row">
        <div id="hl" className="col">
          <div className="googlehoverp">
            <GoogleFlex names="Sophomore" googlehoveropt="googlehover" my="my-3" size="s3"/>
            <GoogleFlex names="IIIT-Allahabad" size="s4" googlehoveropt="googlehover" px="px-1" my="my-3"/>
          </div>
          <div className="googlehoverp my-3">
          <span className="s4 ham">
          Hello,I am Priyesh Raj.
I am from Jamshedpur,Jharkhand.I have studied from Motilal Nehru Public School till 10th class.
I was a shy,introvert,not so intelligent boy in school.
Yet I worked hard and used to be among the top 3 students in my class.
Finally,my hard work paid off and I scored a whooping 96.8% in I.C.S.E examinations.
From there I moved onto a new school-D.A.V Bistupur. 
I had to work very hard as I had to study for school as well as prepare for the JEE examinations.
Although,I faced lot of hardships,my parents always helped me with the best they could so that I don't face any problems.
Their sacrifices are too huge which I cannot even dream of paying back.
It was due to their prayers and sacrifice and my hard work that I got a rank of 9775 in JEE and got admission in IIIT,Allahabad.
I am currently pursuing my B.Tech in ECE from IIIT Allahabad,Prayagraj.
Although I am in ECE branch ,I am keenly interested in competitive coding,making softwares. 
My first year at college was full of new experiences which I could not have gained while living in my home.
Apart from studies the college has a very good environment for programming and is a boon for programmers.
          </span>
          </div>
       </div>
        <div id="links" className="googlehoverp col d-flex flex-column">
          <div className="row my-2">
          <a href="https://www.facebook.com/priyesh.raj.549">
          <span className="m-3 col fb">
            <i className="fab fa-facebook"></i>
          </span>
          </a>
          <a href="https://www.github.com/ekthapriyesh24">
          <span className="m-3 col gh">
            <i className="fab fa-github"></i>
          </span> 
          </a>
          <a href="https://www.instagram.com/ekthapriyesh24">
          <span className="m-3 col ig">
            <i className="fab fa-instagram"></i>
          </span>
          </a>
          </div>
          <div className="row">
          <a href="https://medium.com/@ekthapriyesh24">
          <span className="m-3 col md">
          <i className="fab fa-medium"></i>
          </span>
          </a>
          <a href="https://www.linkedin.com/in/priyesh-raj-01372a147/">
          <span className="m-3 col lin">
            <i className="fab fa-linkedin"></i>
          </span>
          </a>
          <a href="https://www.quora.com/profile/Priyesh-Raj-15">          
          <span className="m-3 col qr">
            <i className="fab fa-quora"></i>
          </span>
          </a>
          </div>
          <div className="row">
          <a href="https://codechef.com/users/ekthapriyesh24">
          <button type="button" className="m-2 col cc btn btn-outline-success ham">Codechef</button>
          </a>
          <a href="https://codeforces.com/profile/ekthapriyesh24">
          <button type="button" className="m-2 mx-4 col cf btn btn-outline-primary ham">Codeforces</button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;