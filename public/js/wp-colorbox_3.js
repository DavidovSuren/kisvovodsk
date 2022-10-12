jQuery(document).ready(function($) {
    $(".wp-colorbox-image").colorbox({maxWidth:"99%", maxHeight: "99%"});
    $(".wp-colorbox-youtube").colorbox({iframe:true, scrolling:false, width:"90%", height:"90%", maxWidth:640, maxHeight: 480});
    $(".wp-colorbox-vimeo").colorbox({iframe:true, scrolling:false, width:"90%", height:"90%", maxWidth:640, maxHeight: 480});
    $(".wp-colorbox-iframe").colorbox({iframe:true, width:"80%", height:"80%"});
    $(".wp-colorbox-inline").colorbox({inline:true, width:"90%", maxWidth:640});
});


