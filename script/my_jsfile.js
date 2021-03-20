$(function(){


   
    //ウインドウがリサイズされたら発動
    $(window).resize(function() {
       
      var w = $(window).width();
      var navh = $('#nav-height');
      var x = 610;
      var y = 630;
      if (w < x){
        navh.css('height','290');
      } else if (w >= y){
        navh.css('height','250');
      } else {
        navh.css('height','245');
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
      $('html').animate({scrollTop:6299});
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
