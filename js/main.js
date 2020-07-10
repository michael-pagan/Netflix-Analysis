// span background image to width of window
$(document).ready(function(){
    $('.header').height($(window).height());
  });

// refresh DOM and go back to #barchart_div
function refreshRace(reload) {
    window.location.hash = '#barchart_div';
    window.location.reload(true);
 };