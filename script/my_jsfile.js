$(function() {

  /*ガイド　トップ----------------*/
    $(function(){

        var gd_top = $('#gd-top');
        var em = 40;
        
        gd_top.css('display','none');

        /*アニメーション*/
        $(window).scroll(function(){
          var scroll = $(this).scrollTop();
          if(scroll < em){
            gd_top.fadeOut();
          } else {
            gd_top.fadeIn();
          }
        });

        /*クリック*/    
        var re_position = $('#re-position').offset().top - 93;

        gd_top.click(function(){
          $('html').animate({scrollTop:re_position});
        });
    

    });// /ガイドトップ

   /*ガイド　アンダー-----------------*/
      $(function(){
          var gd_und = $('#gd-und');   

          gd_und.click(function(){
            $('html').animate({scrollTop:0});
          });

      });// /ガイドアンダー

  /*ガイド　ミドル-----------------*/
       $(function(){
          var target = $('#gd-mid');
          var el = target.offset().top;
          $(window).scroll(function(){
            var scrollM = $(this).scrollTop();
            if (scrollM > el){
              target.slideDown();
            }

          });
        });// /ガイドアンダー


});//---/function()---