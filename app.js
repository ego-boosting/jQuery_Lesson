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





// // 確認問題
// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'heght': '200px',
//       'width': '100px'
//     }).slideUp();
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color':'#0000FF'});
//   });
// });


// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
// });

$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });