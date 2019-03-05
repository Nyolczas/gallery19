jQuery(function(){
    jQuery('.showSingle').click(function(){
        //   jQuery('.targetDiv').slideUp();
        //   jQuery('.targetDiv').hide();
          jQuery('#div'+$(this).attr('target')).slideToggle();
    });
});