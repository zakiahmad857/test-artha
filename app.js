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


  let dde = document.getElementById('title');
  dde.addEventListener("mousemove", e => {
      let ow = dde.offsetWidth; 
      let oh = dde.offsetHeight; 
      document.getElementById('logoku').style.setProperty('--mouseX', e.clientX * 100 / ow);
      document.getElementById('logoku').style.setProperty('--mouseY', e.clientY * 100 / oh);
});

  var plane = document.getElementById('logoku');
  plane.homePos = { x: plane.offsetLeft, y: plane.offsetTop };
  $('#title').mousemove(function (e) {
        parallax(e, plane, 100);
    });
});


function parallax(e, target, layer) {
    var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
    var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    $(target).offset({ top: y ,left : x });
};