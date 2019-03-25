  var hideAll = function hideAll() {

      var mainSection = document.querySelectorAll('.main-section');

      var keyArray = Object.keys(mainSection);

      keyArray.forEach(function (key) {
          mainSection[key].style.display = 'none';
      });
  };

  var showSection = function showSection(id) {
      hideAll();

      var element = document.getElementById(id);

      element.style.display = 'block';
  };

  showSection('hello_world');



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