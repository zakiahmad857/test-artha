var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#navbarArtha").css({top: '0'});
  } else {
    $("#navbarArtha").css({top: '-60px'});
  }
  prevScrollpos = currentScrollPos;
}

  // function playGif(){
  $(document).ready(function(){
    alert("hai");
    $("#artha-project1-img, #artha-project1-text").hover(
        function() {
            $("#artha-project1-img").attr("src", "images/project/gedungsate.gif");
        },
        function() {
            $("#artha-project1-img").attr("src", "images/project/gunung.jpg");
        }
    );

    $("#artha-project2-img, #artha-project2-text").hover(
        function() {
            $("#artha-project2-img").attr("src", "images/project/merbabu.gif");
        },
        function() {
            $("#artha-project2-img").attr("src", "images/project/langit.jpg");
        }
    );

    $("#artha-project3-img, #artha-project3-text").hover(
        function() {
            $("#artha-project3-img").attr("src", "images/project/merbabu2.gif");
        },
        function() {
            $("#artha-project3-img").attr("src", "images/project/gunung2.jpg");
        }
    );
  });

  // }

  // window.onload = function(){
  //   playGif();
  // }
