// NAVBAR SCROLL HIDE-SHOW
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#navbarArtha").css({
      top: '0'
    });
  } else {
    $("#navbarArtha").css({
      top: '-60px'
    });
  }
  prevScrollpos = currentScrollPos;
}

// PROJECT - GIFs
var link = $(this).attr('href');



window.fadeIn = function(obj) {
    $(obj).fadeIn(2000);
}

$( document ).ready(function() {

$('#kuy').fadeOut('slow', function(){
   //$('#kuy').attr("display","block")
    $('#kuy').load(link+' #content', function(){
        $('#kuy').fadeIn('slow');
    });
});


  $("#artha-project1-all").hover(
    function() {
      $("#artha-project1-img").attr("src", "images/project/gedungsate.gif");
    },
    function() {
      $("#artha-project1-img").attr("src", "images/project/gunung.jpg");
    }
  );

  $("#artha-project2-all").hover(
    function() {
      $("#artha-project2-img").attr("src", "images/project/merbabu.gif");
    },
    function() {
      $("#artha-project2-img").attr("src", "images/project/langit.jpg");
    }
  );

  $("#artha-project3-all").hover(
    function() {
      $("#artha-project3-img").attr("src", "images/project/merbabu2.gif");
    },
    function() {
      $("#artha-project3-img").attr("src", "images/project/gunung2.jpg");
    }
  );


  $('#title').mousemove(function (e) {
        //parallax(e, this, 1);
        parallax(e, document.getElementById('logoku'), 0.25);
    });

 
});


function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth-40) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight-155) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ top: y ,left : x });
};