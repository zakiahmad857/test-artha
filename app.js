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
$( document ).ready(function() {
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


  $('#title').mousemove(
        function(e){
            /* Detecta a posição do mouse */
            var offset = $(this).offset();
            var xPos = e.pageX - offset.left;
            var yPos = e.pageY - offset.top;

            var mouseXPercent = Math.round(xPos / $(this).width() * 100);
            var mouseYPercent = Math.round(yPos / $(this).height() * 100);
            $(this).children('img').each(
                function(){
                    var diffX = $('#title').width() - $(this).width();
                    var diffY = $('#title').height() - $(this).height();

                    var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;

                    var myY = diffY * (mouseYPercent / 100);

                    var cssObj = {
                        'left': myX + 'px',
                        'top': myY + 'px'
                    }
                    //$(this).css(cssObj);
                    $(this).animate({
                        left: myX, 
                        top: myY
                    },
                    {
                        duration: 50, 
                        queue: false, 
                        easing: 'linear'
                    });

                }
            );
});

 
});


function parallax(e, target, layer) {
    var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
    var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    $(target).offset({ top: y ,left : x });
};