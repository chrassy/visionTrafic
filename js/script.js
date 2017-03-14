
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
       else if ($(this).attr('id') == "visumSaftey") {
      $(".spremembaVsebine").load("visum-safety.html");      
     }
     else if ($(this).attr('id') == "vissim") {
      $(".spremembaVsebine").load("vissim.html");      
     }
      else if ($(this).attr('id') == "viswalk") {
      $(".spremembaVsebine").load("viswalk.html");      
     }
     else if ($(this).attr('id') == "vistro") {
      $(".spremembaVsebine").load("vistro.html");      
     }
     else if ($(this).attr('id') == "optima") {
      $(".spremembaVsebine").load("optima.html");      
     }
      else if ($(this).attr('id') == "balance") {
      $(".spremembaVsebine").load("balance.html");      
     }
     else if ($(this).attr('id') == "epics") {
      $(".spremembaVsebine").load("epics.html");      
     }
     else if ($(this).attr('id') == "vistad") {
      $(".spremembaVsebine").load("vistad.html");      
     }
     else if ($(this).attr('id') == "dataAnalytics") {
     	$(".spremembaVsebine").load("visumDataAnalytics.html");     	
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
      else if ($(this).attr('id') == "test") {
      $(".spremembaVsebine").load("test.html");      
     }                      
  });
});



//mainPage links to ajax from pregled 
$(function(){
    $(".vise").click(function(){
       if ($(this).attr('id') == "proizvodi2") {
       }
       if ($(this).attr('id') == "visum2") {            
        $("#visum").click();
        $("#visum").css('color', "#E02129");
        $("#pregled").css('color', "#4B4A4D"); 
       }
        if ($(this).attr('id') == "trening2"){
       $("body").load("trening-podrska.html");     
       $("#trening").click();
       $("#trening").css('color', "#E02129");
       $("#podrzka").css('color', "#4B4A4D"); 
       }
        if ($(this).attr('id') == "podrzka2") {
       $("#podrzka2").click();     
       $("#podrzka").click();
       $("#podrzka").css('color', "#E02129");
       $("#trening").css('color', "#4B4A4D");
       }   
             
   });    
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