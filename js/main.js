(function(){

    // gnb menu event

     $('.submenu_wrap').each(function(a){
        $(this).attr({
            'data' : a
            });
    });

    $('.top_nav').each(function(i){
        $(this).attr({
            'data-num': i
        });
    }).mouseover(function(){
        var num = $(this).attr('data-num');
        
        $('header').addClass('on');
        $('header').addClass('line')

        if(num == 0){
            $('.submenu_wrap').eq(0).css({
                display : 'block'
            });

            
        }else if(num == 1){
            $('.submenu_wrap').eq(1).css({
                display : 'block'
            });
        }else if(num == 2){
            $('.submenu_wrap').eq(2).css({
                display : 'block'
            });
        }else if(num == 3){
            $('.submenu_wrap').eq(3).css({
                display : 'block'
            });
        }
    
    }).mouseout(function(){
        var num = $(this).attr('data-num');
        
        $('header').removeClass('on');
        $('header').removeClass('line');

        if(num == 0){
            $('.submenu_wrap').eq(0).css({
                display : 'none'
            });
            
        }else if(num == 1){
            $('.submenu_wrap').eq(1).css({
                display : 'none'
            });
        }else if(num == 2){
            $('.submenu_wrap').eq(2).css({
                display : 'none'
            });
        }else if(num == 3){
            $('.submenu_wrap').eq(3).css({
                display : 'none'
            });
        }

    });


    

    // 모바일 메뉴 

    $('.mo_menu_img').click(function(){
        $('.mo_menu').css({
            display : 'block',
        });
    });

    $('.close').click(function(){
        $('.mo_menu').css({
            display : 'none',
        });
    });




    // section_1 슬라이드 이벤트 

    var bullet = ['슬라이드1', '슬라이드2', '슬라이드3', '슬라이드4'];
    var swiper = new Swiper('.swiper-container', {
        centeredSlides: true,    //센터모드
        speed:400,
        autoplay: {     //자동슬라이드 (false-비활성화)
            delay: 4500, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop : true,   // 슬라이드 반복 여부
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + '</span></div>';
            }
        },
    });



    //section_2 swiper 이벤트
    
    var swiper = new Swiper(".sec2_Swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        breakpoints: {
            300: {
                slidesPerView: 1,  //브라우저가 768보다 클 때
                spaceBetween: 20,
              },
            360: {
                slidesPerView: 1.2,  //브라우저가 768보다 클 때
                spaceBetween: 20,
              },
            430:{
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 20,
            }, 
            600: {
                slidesPerView: 2,  //브라우저가 768보다 클 때
                spaceBetween: 20,
            },
            730: {
                slidesPerView: 2.5,  //브라우저가 768보다 클 때
                spaceBetween: 20,
              },
            870: {
              slidesPerView: 3,  //브라우저가 768보다 클 때
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3.5,  //브라우저가 1024보다 클 때
              spaceBetween: 20,
            },
        }
    });




    //section_4 swiper 이벤트

   
    var swiper = new Swiper(".sec4_swiper", {
        spaceBetween: 20,    // 슬라이드 사이 여백
        slidesPerView : 1.1,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            300: {
                scrollbar: {
                    dragSize: 70,
                },
                slidesPerView: 1,  
                spaceBetween: 20,
              },
            395: {
                
                slidesPerView: 1.2, 
                spaceBetween: 20,
              },
            487: {
                slidesPerView: 1.4,  
                spaceBetween: 20,
                },
            555:{
                scrollbar: {
                    dragSize: 110,
                },
                slidesPerView: 1.7,  
                spaceBetween: 20,
            }, 
            655:{
                scrollbar: {
                    dragSize: 110,
                },
                slidesPerView: 2.1,  
                spaceBetween: 20,
            },
            785:{
                scrollbar: {
                    dragSize: 150,
                },
                slidesPerView: 2.3,  
                spaceBetween: 20,
            }, 
            885: {
                scrollbar: {
                    dragSize: 200,
                },
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            950: {
                slidesPerView: 2.6,
                spaceBetween: 20,
              },

            1020: {
                slidesPerView: 2.7,  
                spaceBetween: 20,
            },
            1085: {
                slidesPerView: 3,  
                spaceBetween: 20,
              },
            1120: {
                slidesPerView: 3.1, 
                spaceBetween: 20,
            },
            1185: {
               
                slidesPerView: 3.3, 
                spaceBetween: 20,
            }
        }
    });


    //section_5

    $('.icon_con01').click(function(){
        $('.icon_01').css({
            fontWeight : 800,
        }),$('.icon_02, .icon_03, .icon_04').css({
            fontWeight : 500
        });
    });

    $('.icon_con02').click(function(){
        $('.icon_02').css({
            fontWeight : 800
        }),$('.icon_01, .icon_03, .icon_04').css({
            fontWeight : 500
        });
    });

    $('.icon_con03').click(function(){
        $('.icon_03').css({
            fontWeight : 800
        }),$('.icon_01, .icon_02, .icon_04').css({
            fontWeight : 500
        });
    });

    $('.icon_con04').click(function(){
        $('.icon_04').css({
            fontWeight : 800
        }),$('.icon_01, .icon_02, .icon_03').css({
            fontWeight : 500
        });
    });
 

})();

   



