//AJAX za context

$(function(){
  $(".classloader").click(function(){
  	if ($(this).attr('id') == "pregled") {
    	$(".spremembaVsebine").load("pregled.html");
     }
  	else if ($(this).attr('id') == "visum") {
    	$(".spremembaVsebine").load("visum.html");
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

//alway keep one  element insidebar open
