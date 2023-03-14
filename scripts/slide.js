// 見出しをスライドで出す
$(function(){
    $('document').ready(function(){
      $('h1').toggleClass('slide_on');
    }); 
  });

// 画像をふわっと
  $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});
