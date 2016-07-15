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
        $('.on-timeout').html('<a href="mailto:'+r(u)+'@'+r(d)+'.com">'+r(u)+'@'+r(d)+'.com</a>');
    }, 3000);

    // Collapse all open Bootstrap collapsable containers
    $(document).on('click',function(){
    	$('.collapse').collapse('hide');
    })

    // Enable Bootstrap v3 tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // TODO flexbox would solve for this
    var widest = 0;
    $('.vcard').each(function () {
      widest = Math.max(widest, $(this).outerWidth());
    }).width(widest);

});
