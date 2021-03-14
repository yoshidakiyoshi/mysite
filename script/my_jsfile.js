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
    var re_position = $('#re-position').offset().top;

    gdTop.click(function(){
      $('html').animate({scrollTop:re_position});
    });

  });// /ガイドトップ

   /*ガイド　アンダー-----------------*/
    var gd_und = $('#gd-und');   

    gd_und.click(function(){
      $('html').animate({scrollTop:0});
    });

  /*ガイド　ミドル-----------------*/
  var target = $('#gd-mid');
  var el = target.offset().top;
  $(window).scroll(function(){
    var scrollM = $(this).scrollTop();
    if (scrollM > el){
      target.slideDown();
    }

  });


});//---/function()---