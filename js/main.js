// Carousel 
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $(document).on("scroll",function(){
        sTop =  document.documentElement.scrollTop;
        if(sTop >= 350){
            $("#scroll-up").fadeIn(1000);
        }else{
            $("#scroll-up").fadeOut(1000);    
        }
    })
    $("#scroll-up").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    })
})

///////////////////////