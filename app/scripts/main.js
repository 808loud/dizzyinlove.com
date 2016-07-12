$(document).ready(function(){
  setTimeout(function(){
    // hi in reverse
    var u = 'ih';
    // dizzyinlove in reverse
    var d = 'evolniyzzid'
    function r(i) {
      i = i.split('').reverse().join('');
      return i;
    }
    $('.on-human').html('<a href="mailto:'+r(u)+'@'+r(d)+'.com">'+r(u)+'@'+r(d)+'.com</a>');
  }, 3000);
});
