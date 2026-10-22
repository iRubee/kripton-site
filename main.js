var body = document.getElementById("pop-ups");
var main = document.querySelector("body");
var popUp1 = document.getElementById("pop-ups1");
var popUp2 = document.getElementById("pop-ups2");
var popUp3 = document.getElementById("pop-ups3");
var popUp4 = document.getElementById("pop-ups4");
var popUp5 = document.getElementById("pop-ups5");
var popUp6 = document.getElementById("pop-ups6");
var popUp7 = document.getElementById("pop-ups7");
var cross = document.getElementById("cross");

//navbar function
body.style.top = "0px";
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  body.style.top = currentScrollPos + "px";
  if (currentScrollPos < 260) {
    document.getElementById("navbar").style.top = "-120px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
};

//pop-ups functions
function crossFunction()
{
  body.style.display = "none";
  main.style.overflowY = 'scroll';
  
}
function hiddenPop1()
{
  popUp1.style.display = 'flex';
  popUp2.style.display = 'none';
  popUp3.style.display = 'none';
  popUp4.style.display = 'none';
  popUp5.style.display = 'none';
  popUp6.style.display = 'none';
  popUp7.style.display = 'none';
}
function hiddenPop2()
{
  popUp1.style.display = 'none';
  popUp2.style.display = 'flex';
  popUp3.style.display = 'none';
  popUp4.style.display = 'none';
  popUp5.style.display = 'none';
  popUp6.style.display = 'none';
  popUp7.style.display = 'none';
}
function hiddenPop3()
{
  popUp1.style.display = 'none';
  popUp2.style.display = 'none';
  popUp3.style.display = 'flex';
  popUp4.style.display = 'none';
  popUp5.style.display = 'none';
  popUp6.style.display = 'none';
  popUp7.style.display = 'none';
}
function hiddenPop4()
{
  popUp1.style.display = 'none';
  popUp2.style.display = 'none';
  popUp3.style.display = 'none';
  popUp4.style.display = 'flex';
  popUp5.style.display = 'none';
  popUp6.style.display = 'none';
  popUp7.style.display = 'none';
}
function hiddenPop5()
{
  popUp1.style.display = 'none';
  popUp2.style.display = 'none';
  popUp3.style.display = 'none';
  popUp4.style.display = 'none';
  popUp5.style.display = 'flex';
  popUp6.style.display = 'none';
  popUp7.style.display = 'none';
}
function hiddenPop6()
{
  popUp1.style.display = 'none';
  popUp2.style.display = 'none';
  popUp3.style.display = 'none';
  popUp4.style.display = 'none';
  popUp5.style.display = 'none';
  popUp6.style.display = 'flex';
  popUp7.style.display = 'none';
}
function hiddenPop7()
{
  popUp1.style.display = 'none';
  popUp2.style.display = 'none';
  popUp3.style.display = 'none';
  popUp4.style.display = 'none';
  popUp5.style.display = 'none';
  popUp6.style.display = 'none';
  popUp7.style.display = 'flex';
}
function openPopUp1()
{
  hiddenPop1();
  body.style.display = 'flex';
  main.style.overflow = 'hidden';
}
function openPopUp2()
{
  hiddenPop2();
  body.style.display = 'flex';
  main.style.overflow = 'hidden';
}
function openPopUp3()
{
  hiddenPop3();
  popUp3.style.display = 'block';
  body.style.display = 'flex';
  main.style.overflow = 'hidden';
}
function openPopUp4()
{
  hiddenPop4();
  body.style.display = 'flex';
  main.style.overflow = 'hidden';
}
function openPopUp5()
{
  hiddenPop5();
  body.style.display = 'flex';
  main.style.overflow = 'hidden';
}
function openPopUp6()
{
  hiddenPop6();
  body.style.display = 'flex';
  main.style.overflow = 'hidden';
}
function openPopUp7()
{
  hiddenPop7();
  body.style.display = 'flex';
  main.style.overflow = 'hidden';
}
function change(a, b, c, d)
{
    document.getElementById(a).style.background = "#FFC0CB"; 
    document.getElementById(b).style.background = "#FFC0CB"; 
    document.getElementById(c).style.background = "#FFC0CB"; 
    document.getElementById(d).style.background = "#FFC0CB";
    document.getElementById(a).style.boxShadow = "0px -15px 60px 3px rgba(255, 192, 203, 1),0 -15px 70px 6px rgba(255, 192, 203, 1),0 -15px 80px 12px rgba(255, 192, 203, 1)"
    document.getElementById(b).style.boxShadow = "0px -15px 60px 3px rgba(255, 192, 203, 1),0 -15px 70px 6px rgba(255, 192, 203, 1),0 -15px 80px 12px rgba(255, 192, 203, 1)" 
    document.getElementById(c).style.boxShadow = "0px -15px 60px 3px rgba(255, 192, 203, 1),0 -15px 70px 6px rgba(255, 192, 203, 1),0 -15px 80px 12px rgba(255, 192, 203, 1)" 
    document.getElementById(d).style.boxShadow = "0px -15px 60px 3px rgba(255, 192, 203, 1),0 -15px 70px 6px rgba(255, 192, 203, 1),0 -15px 80px 12px rgba(255, 192, 203, 1)" 

}
function change2(a, b, c, d)
{
    document.getElementById(a).style.background = "rgb(183, 181, 181)"; 
    document.getElementById(b).style.background = "rgb(183, 181, 181)"; 
    document.getElementById(c).style.background = "rgb(183, 181, 181)"; 
    document.getElementById(d).style.background = "rgb(183, 181, 181)";
    document.getElementById(a).style.boxShadow = "0px 0px 0px"
    document.getElementById(b).style.boxShadow = "0px 0px 0px" 
    document.getElementById(c).style.boxShadow = "0px 0px 0px" 
    document.getElementById(d).style.boxShadow = "0px 0px 0px" 

}