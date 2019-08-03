import $ from 'jquery';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Breaker from './Breaker';
import Load from './Load';
import * as serviceWorker from './serviceWorker';
var ctr=1;
$(document).ready(function() {
    $("#root6").fadeOut(3200);
    $(".or0").css("color", "white");        
    $(".menubutton").click(function(){
        $(".dropdownmenu").css("background-color","white");
    }
      );
if ( $(window).width() <= 801 ) {
    $(".bart").css("display","none");            
    }
$('a[href^="#"]').on('click',function (e) {
    ctr++;
    // e.preventDefault();
    var target = this.hash,
    $target = $(target);
   $('html, body').stop().animate({
     'scrollTop': $target.offset().top-70
    }, 900, 'swing', function () {
     window.location.hash = target;
    });
    //$('#dpdmenu').collapse({
      //  toggle: false
      //})
      if(ctr%2===0)
      $('#dpdmenu').toggleClass('show');
});
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll);
    if(scroll >= 3952 && scroll <= 4475)
    {
    $("#fgfg4").css("color", "rgb(94, 252, 32)");
    }
    else{
    $("#fgfg4").css("color", "black");
    }
});
$(window).scroll(function() {
    if($(window).scrollTop() > 20) {
        $(".bart").css("background-color","white");        
        $(".bart").css("borderBottom","1px solid grey");
        $(".or0").css("color", "black");    
    } else {
        $(".bart").css("background-color","transparent");
        $(".bart").css("borderBottom","1px solid transparent");
        $(".or0").css("color", "white");            
    }
    if($(window).scrollTop() > 550) {
        $("#dropcontainer").css("background-color","white");        
        $("#dropcontainer").css("border-bottom","0.5px solid black");        
        $(".dropdownmenu").css("background-color","white");
        $(".menubutton").css("color","black");
    } else {
        $("#dropcontainer").css("background-color","transparent");
        $("#dropcontainer").css("border-bottom","0.5px solid transparent");        
        $(".dropdownmenu").css("background-color","white");
        $(".menubutton").css("color","white");
    }
});
$(".or0").hover(function () {
    $(this).css("color","orange");
    },function () {
        if($(window).scrollTop() < 20) {
            $(this).css("color","white");
            $(".fgfgf").css("color","rgb(94, 252, 32)");
        }
        else
        {
            $(this).css("color","black");
            $(".fgfgf").css("color","black");
        }
        }    
   );
$(".bart").hover(function () {
    if($(window).scrollTop() < 20) {
    $(".or0").css("color", "white");
    $(".fgfgf").css("color", "rgb(94, 252, 32)");
    $(".bart").css("background-color", "transparent");
    $(".bart").css("borderBottom","1px solid transparent");
    }    
   });
    $("#root").mouseover(function () {
    $(".or0").css("color", "white");
    $(".fgfgf").css("color", "rgb(94, 252, 32)");
    $(".bart").css("background-color", "transparent");
    $(".bart").css("borderBottom","1px solid transparent");    
   });
   $("#root").mouseout(function (){
    $(".or0").css("color", "black");
    $(".fgfgf").css("color", "black");
    $(".bart").css("background-color","white");    
    $(".bart").css("borderBottom","1px solid grey");    
   });
   $("#root1").mouseover(function () {
    $("#fgfg1").css("color", "rgb(94, 252, 32)");
   });
   $("#root1").mouseout(function () {
    $("#fgfg1").css("color", "black");
   });
   $("#root2").mouseover(function () {
    $("#fgfg2").css("color", "rgb(94, 252, 32)");
   });
   $("#root2").mouseout(function () {
    $("#fgfg2").css("color", "black");
   });
   $("#root3").mouseover(function () {
    $("#fgfg3").css("color", "rgb(94, 252, 32)");
   });
   $("#root3").mouseout(function () {
    $("#fgfg3").css("color", "black");
   });
   $("#root4").mouseover(function () {
    $("#fgfg4").css("color", "rgb(94, 252, 32)");
   });
   $("#root4").mouseout(function () {
    $("#fgfg4").css("color", "black");
   });
   $("#root5").mouseover(function () {
    $("#fgfg5").css("color", "rgb(94, 252, 32)");
   });
   $("#root5").mouseout(function () {
    $("#fgfg5").css("color", "black");
   });
ReactDOM.render(<Home/>, document.getElementById('root'));
ReactDOM.render(<Breaker mm="50px"/>, document.getElementById('root11'));
ReactDOM.render(<About/>, document.getElementById('root1'));
ReactDOM.render(<Breaker mm="50px"/>, document.getElementById('root21'));
ReactDOM.render(<Skills/>, document.getElementById('root2'));
ReactDOM.render(<Breaker mm="50px"/>, document.getElementById('root31'));
ReactDOM.render(<Projects/>, document.getElementById('root3'));
ReactDOM.render(<Breaker mm="50px"/>, document.getElementById('root41'));
ReactDOM.render(<Education/>, document.getElementById('root4'));
ReactDOM.render(<Breaker mm="50px"/>, document.getElementById('root51'));
ReactDOM.render(<Contact/>, document.getElementById('root5'));
ReactDOM.render(<Load/>, document.getElementById('root6'));
});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
