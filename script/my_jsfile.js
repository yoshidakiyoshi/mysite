$(function(){

  $(function(){
    //630px~640px
  
    var window_width = $(window).width();
    var navH = $('#nav-height');
    if (window_width > 615 && window_width < 630){
      navH.css('height','240px');
    } 
  
  });

  /*ガイド　トップ------------------------------*/
  $(function(){

      var gd_top = $('#gd-top');
      var em = 40;

      gd_top.css('display','none');

      /*スクロール*/
      $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      if(scroll < em){
      gd_top.fadeOut();
      } else {
      gd_top.fadeIn();
      }
      });

      /*クリック*/    
      gd_top.click(function(){
      $('html').animate({scrollTop:6292});
      });


  });/*ガイド　トップ*/



  /*ガイド　ミドル-------------------------------*/
  $(function() {

      var gd_mid = $('#gd-mid');
      /*スクロール*/
      $(window).scroll(function(){
      var scrollM = $(this).scrollTop();
      if (scrollM < 1450 || scrollM > 6750){
        gd_mid.fadeOut();
      } else {
        gd_mid.fadeIn();
      }
      });

      /*クリック*/ 
      gd_mid.click(function(){
        $('html').animate({scrollTop:7480});
      });

  });/*ガイド　ミドル*/


  /*ガイド　アンダー-------------------------------*/
  $(function() {

      var gd_und = $('#gd-und');   

      /*クリック*/ 
      gd_und.click(function(){
      $('html').animate({scrollTop:0});
      });

      /*ホバー*/
      
      gd_und.hover(function() {

        $('#gd-und img').css({'transform': 'rotateX(180deg)',
      'transition':'all 200ms 0s ease'});

      }, function() {    

        $('#gd-und img').css('transform', 'rotateX(0deg)');      
      });

});/*ガイド　アンダー*/

});
