var typed = new Typed('.type', {
    strings: ['Programmer', 'Designer','Developer','Creator'],
    typeSpeed:140,
    backSpeed:90,
    loop:true,
  });
  
  //Type In Weather Title
  
  var typed = new Typed('.davaotitle', {
    strings: ['(Weather Forecast)'],
    typeSpeed:180,
    backSpeed:140,
    loop:true,
  });
  
  //Type In Youtube Channel Title
  
  var typed = new Typed('.Ytitle', {
    strings: ['(Youtube Channel)'],
    typeSpeed:180,
    backSpeed:140,
    loop:true,
  });
  
  
  $(document).ready(function(){
      $(window).scroll(function(){
          if(this.scrollY > 20){
              $('.navbar').addClass("sticky");
          }else{
              $('.navbar').removeClass("sticky");
          }
     });
     $('.menu-btn').click(function(){
          $('.navbar .menu').toggleClass("active");
          $('.menu-btn i').toggleClass("active");
     });
  }); 
  