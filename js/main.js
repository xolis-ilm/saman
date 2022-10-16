$(window).scroll(function() {

    if ($(this).scrollTop()>50)
     {
        $('.chkIt').eq(index)[0].checked = false
     }
 });