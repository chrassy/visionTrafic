
//alway keep one  element in sidebar open
$('.classloader').on('click',function(e){	
	if($(this).hasClass("open")){
    	e.stopPropagation();
    }
	
    else {    	
    	$(".open").removeClass("open");
    	$(this).addClass("open");
    }
    
});

//AJAX za context
$(function(){
  $(".classloader").click(function(){
  	if ($(this).attr('id') == "pregled") {
    	$(".spremembaVsebine").load("pregled.html");
    	
     }
  	else if ($(this).attr('id') == "visum") {
    	$(".spremembaVsebine").load("visum.html");
    	
     }
     else if ($(this).attr('id') == "dataAnalytics") {
     	$(".spremembaVsebine").load("visum-data-analytics.html");
     	
     }  
     else if ($(this).attr('id') == "trafficData") {
     	$(".spremembaVsebine").load("trafficData.html");
     	
     }     
  });
});


//Obarvan trenutni podmeni in meni
$(function() {  
$('.clicked').click(function(){
	$('.clicked').css('color', '#4B4A4D');
    $(this).css('color', '#E02129');

  });
});

$(function() {  
$('.classloader').click(function(){
	$('.clicked').css('color', '#4B4A4D');
	$('.classloader').css('color', '#4B4A4D');
    $(this).css('color', '#E02129');

  });
});

//HAMBURGER MENU
//hide sideNav
if ($(window).width() < 768) {
   $("#sideNav").hide();
}
$(window).resize(function() {
    if($(window).width() < 768) {
		$("#sideNav").hide();
	}
	else {
		$("#sideNav").show();
	}
});	

//sideNav width 20% when displayed
if ($(window).width() > 768) {
   $("#sideNav").css("width", "20%");
}
$(window).resize(function() {
    if($(window).width() > 768) {
		$("#sideNav").css("width", "20%");
	}	
});	

// toggle sideNav with menu btn, width 80%
$(function() {  
$('#hamburger').click(function(){
    $("#sideNav").css("width","100%");
	$("#sideNav").slideToggle(1000);
  });
});