
//alway keep one  element in sidebar open
$('.classloader').on('click',function(e){	
	if($(this).hasClass("open")){
    	e.stopPropagation(); 
      $(".clicked.open").removeClass("open");     
    }
	
    else {    	
    	 $(".open").removeClass("open");
        $(this).addClass("open");
    }
    
});

$('.clicked').on('click',function(e){ 
  if($(this).hasClass("open")){
       e.stopPropagation();    
    }
  
    else {      
       $(".clicked.open").removeClass("open");
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
     else if ($(this).attr('id') == "trening") {
      $(".spremembaVsebine").load("trening.html");      
     }
     else if ($(this).attr('id') == "podrzka") {
      $(".spremembaVsebine").load("podrzka.html");      
     }
     else if ($(this).attr('id') == "viswalk") {
      $(".spremembaVsebine").load("viswalk.html");      
     }                  
  });
});



//mainPage links to ajax from pregled 
$(function(){
      
       $("#pregled2").click();     
       $("#pregled").click();
       $("#pregled").css('color', "#E02129");
       $("#visum").css('color', "#4B4A4D"); 

       $("#visum2").click();     
       $("#visum").click();
       $("#visum").css('color', "#E02129");
       $("#pregled").css('color', "#4B4A4D"); 

       $("#trening2").click();     
       $("#trening").click();
       $("#trening").css('color', "#E02129");
       $("#podrzka").css('color', "#4B4A4D"); 

       $("#podrzka2").click();     
       $("#podrzka").click();
       $("#podrzka").css('color', "#E02129");
       $("#trening").css('color', "#4B4A4D"); 

});
     
    
    
//Obarvan trenutni podmeni in meni
$(function() {  
$('.clicked').click(function(){
	$('.clicked').css('color', '#4B4A4D');
    $(this).css('color', '#E02129');   
    $(this).addClass("open");
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
    $("#sideNav").css("width","80%");
	$("#sideNav").slideToggle(750);
  });
});