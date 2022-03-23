"use strict";
(function() {
window.addEventListener("load", init);

  function init() {

// This is the Synchronous part of JavaScript. 
s1();
s2();
s3();

//This is the Synchronous part of JavaScript. 
s6();

//Asynchronous Programming
setTimeout(a1, 4000);


    //
setTimeout(a2, 6000);
a3();


    
    
}

//
function s1() {
  console.log('s1');
}
function s2() {
  console.log('s2');
}
function s3() {
  console.log('s3');
}

//
function s4() {
  console.log('s4');
}
function s5() {
  s4();
}
function s6() {
  s5();
}


////////
function a1() {
  console.log('a1');
}

function a2() {
  console.log('a2');
}

function a3() {
  console.log('a3');
}




})();
