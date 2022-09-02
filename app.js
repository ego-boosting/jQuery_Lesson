// $(document).ready(function(){
//   $('body').html('<h1>Hello jQuery!!<h1>');
// });

// // $(document).ready(function(){
// //   //jQueryプログラムnの内容
// // });

// // // 頻繁に使うコードなので、省略形も用意されています。

// // $(function(){
// //   //jQuery(プログラムの内容)
// // });
// $('body').html('<h1>Hello JQuery!!(/h1)');

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'heght': '200px',
      'width': '100px'
    }).slideUp();
  });
});