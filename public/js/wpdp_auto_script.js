        


            jQuery(document).ready(function($){

                setTimeout(function () {

                    $('#ui-datepicker-div').wrap('<div class="ui-datepicker-div-wrapper"></div>');

                }, 1000)
            });

        

        	
	

	jQuery(document).ready(function($){


		
		if($('.wpcf7-form-control.wpcf7-repeater-add').length>0){
			$('.wpcf7-form-control.wpcf7-repeater-add').on('click', function(){
				wpdp_refresh_435822(jQuery, true);
			});
		}
		
	
});
var wpdp_refresh_first_435822 = 'yes';
var wpdp_intv_435822;
var wpdp_counter_435822 = 0;
var wpdp_month_array_435822 = [];
var wpdp_dateFormat = "dd-mm-yy";
var wpdp_defaultDate = "";
var wpdp_changeMonth = false;
var wpdp_changeYear = false;
var wpdp_firstDay = "";
var wpdp_closeText = "";
var wpdp_currentText = "";
var wpdp_minDate = "";
var wpdp_maxDate = "";
var wpdp_yearRange = "";
var wpdp_showButtonPanel = false;
var wpdp_stepMonths = "";
function wpdp_refresh_435822($, force){
				if(typeof $.datepicker!='undefined' && typeof $.datepicker.regional["en-GB"]!='undefined'){
					
				wpdp_month_array_435822 = $.datepicker.regional["en-GB"].monthNames;
									
				}
				
		
		
				


				if($(".wc-as-date").length>0){
					
				$(".wc-as-date").attr("autocomplete", "off");
					
				//document.title = wpdp_refresh_first=='yes';
				//force = true;
								if(wpdp_refresh_first_435822 == 'yes' || force){
					
					
					
										
					if(typeof $.datepicker!='undefined')
					$(".wc-as-date").datepicker( "destroy" );
					
					
					$(".wc-as-date").removeClass("hasDatepicker");
					wpdp_refresh_first_435822 = 'done';
					
				}
								$('body').on('mouseover, mousemove', function(){//
				
			
				
				if ($(".wc-as-date").length>0) {
					$.each($(".wc-as-date"), function(wp_si, wp_sv){
						if($(this).val()!=''){
							$(this).attr('data-default-val', $(this).val());
						}
					});
				}		
				
				
								if(wpdp_counter_435822 > 2)
				clearInterval(wpdp_intv_435822);
								
				
					
				if($(".wc-as-date.hasDatepicker").length!=$(".wc-as-date").length){

				
					
				$(".wc-as-date").datepicker($.extend(  
					{},  // empty object  
					$.datepicker.regional[ "en-GB" ],       // Dynamically  
					{  
 					dateFormat: wpdp_dateFormat
					}
				)).on( "change", function() {
						
				}); 
				
				
				
				
				
				$(".wc-as-date").datepicker( "option", "dateFormat", "dd-mm-yy" );


setTimeout(function(){ 

	 $.each($(".wc-as-date"), function(){

        
            $(this).prop('autocomplete', 'on');


         		 		
		var expected_default = $(this).data('default');		

		
		var expected_stamp = $(this).data('default_stamp');
		var expected_stamp_date = new Date(expected_stamp*1000);
		var expected_stamp_str = $.datepicker.formatDate('dd-mm-yy', expected_stamp_date);		 
	 
		if(expected_default != undefined && expected_default!=''){ $(this).datepicker().datepicker('setDate', expected_default); }
		if(expected_stamp != undefined && expected_stamp!=''){ $(this).datepicker().datepicker('setDate', expected_stamp_str); }		
		
	});
	
}, 100);
	
				$(".wc-as-date").datepicker( "option", "changeMonth", false );

				$(".wc-as-date").datepicker( "option", "changeYear", false );

				$(".wc-as-date").datepicker( "option", "showButtonPanel", false );







					$.each($(".wc-as-date"), function(){
						var this_selector = $(this);
						var parent_form = this_selector.closest('form');
						
						parent_form.on('reset', function(){
							if(this_selector.data('default-val')!= ""){
								setTimeout(function(){
									if(this_selector.val() == ''){
										this_selector.val(this_selector.data('default-val'));
									}
								});
							}
						});
						if($(this).data('default-val')!= ""){
							$(this).val($(this).data('default-val'));
						}
						
					});
						
				
				}
				
				
				
				});
				}
		


		
		$('.ui-datepicker').addClass('notranslate');
}
	wpdp_intv_435822 = setInterval(function(){
		wpdp_counter_435822++;
		wpdp_refresh_435822(jQuery, false);
		
	}, 500);

	                jQuery(document).ready(function($){

                        $(".wc-as-date").on('click', function(){

                            $('.ui-datepicker-div-wrapper').prop('class', 'ui-datepicker-div-wrapper wp_datepicker_option-1 ');

                        });

                        setTimeout(function () {
                                $(".wc-as-date").click();
                                //$("//").focusout();
                        }, 1000);



                });

            
    //wpdp_refresh_//(jQuery, false);
	
	    
