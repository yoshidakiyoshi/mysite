$(function(){

  /*ガイド　トップ------------------------------*/
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


  });/*ガイド　トップ*/

  /*ガイド　アンダー-------------------------------*/
  $(function() {

      var gd_und = $('#gd-und');   

      gd_und.click(function(){
      $('html').animate({scrollTop:0});
      });

      gd_und.hover(function() {
 
      //マウスを乗せたら色が変わる
        $(this).css({'transform': 'rotateX(180deg)',
      'transition':'all 200ms 0s ease'});
     
      //ここにはマウスを離したときの動作を記述
      }, function() {
     
      //色指定を空欄にすれば元の色に戻る
        $(this).css('transform', 'rotateX(0deg)');
     
      });

  });/*ガイド　アンダー*/

  /*ガイド　ミドル-------------------------------*/
  $(function() {

      var target = $('#gd-mid');
      var el = target.offset().top;
      $(window).scroll(function(){
      var scrollM = $(this).scrollTop();
      if (scrollM > el){
      target.slideDown();
      }

      });/*ガイド　ミドル*/

  });

});
