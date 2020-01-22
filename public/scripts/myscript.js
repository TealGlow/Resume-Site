//jshint esversion:6

//setting the year in the footer so that it will change in the new year
//dont worry, its not static!
const date = new Date();
const y = date.getFullYear();
$(".year").html(y);

//getting the path of the page
let p = window.location.pathname.split("/");

//Haha
if(p[1] == "compose"){
  $("#footer").css({"background-color": "", color:"#080A0C"});
  $("#footer").removeClass("box-shading");
}else{
  $("#footer").css("background-color", "#080A0C");
}


//scrolling
$(window).scroll(()=>{
  //handling the arrow fading in on scroll
  let height = $(window).scrollTop();
  if(height>150){
    //if we scroll past 100, then the arrow fades in
    $(".top-arrow").fadeIn();
  }else{
    //else it fades out
    $(".top-arrow").fadeOut();
  }
});
$(window).ready(()=>{
  //slow scroll
  $(".top-arrow").click((event)=>{
    event.preventDefault();
    $("html, body").animate({scrollTop:0}, "slow");
    return;
  });
});
