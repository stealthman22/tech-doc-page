 /* Code and comments inspired by Michael Charles Aubrey @freeCodeCamp */


 var hideAll = function hideAll() {

     var mainSection = document.querySelectorAll('.main-section');

     /* document.querySelectorAll() will return a JavaScript object
     containing all nodes which match the query. Since you are
     passing '.hideable-section' the returned object will contain
     all elements with that class. */

     var keyArray = Object.keys(mainSection);

     /* Object.keys() returns an array of the keys in an object. In this case
      it will return an array of [0,1,2] (assuming the sections I've provided
      in this example).*/

     keyArray.forEach(function (key) {
         mainSection[key].style.display = 'none';
     });

     /* forEach() is a method that can be called on any array. It
     loops through the array and executes the provided callback 
     function passing as the first parameter each item in the array. 
     Since this is a list of keys, we can use each one as a key on the
     hideableSections JavaScript obect and set the styles from there.*/
 };

 var showSection = function showSection(id) {
     hideAll();

     /* This will hide all of the sections with
        the class .hideable-section */

     var element = document.getElementById(id);

     /* Grab the element
       you want and assign
      it to a variable. */

     element.style.display = 'block';

     /* Setting 'display' to 'block' 
       will make it visible. */
 };

 showSection('hello_world');

 /* Shows the first Section/Container as soon as page loads */



 /* var hideAll = function hideAll() {
     var mainSection = document.querySelectorAll('.main-section');
     for (var i = 0; i < mainSection.length; i++) {
         mainSection[i].style.display = 'none';

     }
 };


 var showSection = function showSection(id) {
     hideAll();

     var element = document.getElementByid(id);

     element.style.display = 'block';
 };


 showSection('hello_world'); */