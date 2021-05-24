
  $( document ).ready(function() {
    alert("Hello");
      particlesJS("particles-js", {
        particles: {
            number: { value: 1000, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
            opacity: { value: 0.5, random: true, anim: { enable: false, speed: 1, opacity_min: 0, sync: false } },
            size: { value: 1.5, random: true, anim: { enable: false, speed: 4, size_min: 0.3, sync: false } },
            line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 0.5, direction: "top-left", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 600 } },
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false, mode: "bubble" }, onclick: { enable: false, mode: "repulse" }, resize: true },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
                repulse: { distance: 400, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
  });
  // var count_particles, stats, update;
  // stats = new Stats();
  // stats.setMode(0);
  // stats.domElement.style.position = "absolute";
  // stats.domElement.style.left = "0px";
  // stats.domElement.style.top = "0px";
  // document.body.appendChild(stats.domElement);
  // count_particles = document.querySelector(".js-count-particles");
  // update = function () {
  //     stats.begin();
  //     stats.end();
  //     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  //     }
  //     requestAnimationFrame(update);
  // };
  // requestAnimationFrame(update);
  

    // console.log( "ready!" );
    if($(window).width() >= 600){
  // do your stuff
  var html = document.documentElement;
      var body = document.body;

      var scroller = {
        target: document.querySelector("#scroll-container"),
        ease: 0.05, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
      };

      var requestId = null;

      TweenLite.set(scroller.target, {
        rotation: 0.01,
        force3D: true,
      });

      window.addEventListener("load", onLoad);

      function onLoad() {
        updateScroller();
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll);
      }

      function updateScroller() {
        var resized = scroller.resizeRequest > 0;

        if (resized) {
          var height = scroller.target.clientHeight;
          body.style.height = height + "px";
          scroller.resizeRequest = 0;
        }

        var scrollY =
          window.pageYOffset || html.scrollTop || body.scrollTop || 0;

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
          scroller.y = scrollY;
          scroller.scrollRequest = 0;
        }

        TweenLite.set(scroller.target, {
          y: -scroller.y,
        });

        requestId =
          scroller.scrollRequest > 0
            ? requestAnimationFrame(updateScroller)
            : null;
      }

      function onScroll() {
        scroller.scrollRequest++;
        if (!requestId) {
          requestId = requestAnimationFrame(updateScroller);
        }
      }

      function onResize() {
        scroller.resizeRequest++;
        if (!requestId) {
          requestId = requestAnimationFrame(updateScroller);
        }
      }
}
   
    $(function(){
      $("#navMb").load("nav.html");
     // $("#footer").load("footer.html"); 
    });


    var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('#particles-js').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
    
});
  