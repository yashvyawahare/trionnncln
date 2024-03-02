// dark light mode

// document.addEventListener("DOMContentLoaded", function() {
//   var darkLight = document.querySelector(".dark-light");
//   var body = document.body;
//   var texts = document.querySelectorAll("body *");
//   var startBtn = document.querySelector(".start-btn");

//   darkLight.addEventListener("click", function() {
//       body.classList.toggle("blackBackground");
//       texts.forEach(function(text) {
//           text.classList.toggle("whiteText");
//       });
//       darkLight.classList.toggle("active");
//   });
// });



//dark mode
document.addEventListener("DOMContentLoaded", function() {
  var darkLight = document.querySelector(".dark-light");
  var body = document.body;
  var texts = document.querySelectorAll("body *");
  var startBtns = document.querySelectorAll(".start-btn");

  darkLight.addEventListener("click", function() {
      body.classList.toggle("blackBackground");
      texts.forEach(function(text) {
          text.classList.toggle("whiteText");
      });
      startBtns.forEach(function(btn) {
          btn.classList.toggle("whiteBorder");
          btn.classList.toggle("whiteText");
      });
      darkLight.classList.toggle("active");
  });
});


//add music 
document.addEventListener("DOMContentLoaded", function() {
  var musicDiv = document.querySelector(".music");
  var musicPlayer = document.querySelector(".music-icon");

  musicDiv.addEventListener("click", function() {
      if (musicPlayer.paused) {
          musicPlayer.play();
          musicDiv.classList.add("playing");
      } else {
          musicPlayer.pause();
          musicDiv.classList.remove("playing");
      }
  });
});



gsap.registerPlugin(ScrollTrigger);

    // Define the animation
    gsap.to('.scroll-video', {
        scrollTrigger: {
            trigger: ".start-video",
            start: "top top",
            end: "center top",
            scrub: true // Smooth animation
        },
        width: "900px", // Change width on scroll
        height: "700px",
        duration: 1
    });
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = "grey";
  });

    gsap.to('.slide-in', {
        scrollTrigger: {
            trigger: ".slide-in",
            start: "top 80%", // Adjust this value based on when you want the animation to start
            end: "bottom 80%", // Adjust this value based on when you want the animation to end
            scrub: 1 // Set to 1 for a smooth animation while scrolling
        },
        opacity: 1,
        x: 0, // Slide in from left
        duration: 0.25 // Animation duration
    });
  

    ScrollTrigger.create({
        trigger: '.slide-in', // Element to trigger animation
        start: "top 80%", // Adjust based on when you want the animation to start
        end: "bottom 20%", // Adjust based on when you want the animation to end
        onEnter: function() {
            // Animation code to run when scrolled to
            const myText = new SplitType('#my-text');
            gsap.to('.char', {
                y: 0,
                stagger: 0.01,
                delay: 0.1,
                duration: 0.1
            });
        },
        onLeaveBack: function() {
            // Reset animation when scrolled back
            gsap.set('.char', { y: "100%" });
        },
        once: false // Animation only runs once
    });

  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
  });
  
  function animateCircles() {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
   
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();

//gsap animation for show img that will come from right side leftloom
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".showimg1",
    start: "top center", 
    end: "bottom center", 
    scrub: true,
    marker: true
    // duration: { min: 0.2, max: 3 }, 
  }
});

tl.to(".showimg1", {
  x: -500, // Set the initial position to start from (assuming it starts off-screen)
  opacity: 1, // Optionally set opacity if needed
  duration: 3, // Set the duration to 2 seconds
  ease: "power2.inOut", // Optional easing function
});
//gsap animation for show img that will come from right side imusic

let tb = gsap.timeline({
  scrollTrigger: {
    trigger: ".showimg2",
    start: "top center", 
    end: "bottom center", 
    scrub: true,
    marker: true
      // duration: { min: 0.2, max: 3 }, 
    }
});
tb.to(".showimg2", {
  x:600
})

//gsap animation for show img that will come from left side technis
let tc = gsap.timeline({
  scrollTrigger: {
    trigger: ".showimg3",
    start: "top center", 
    end: "bottom center", 
    scrub: true,
    marker: true
      // duration: { min: 0.2, max: 3 }, 
    }
});
tc.to(".showimg3", {
  x:-200
})


//smooth scroll lenis for the show img
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//recent work slide in animation
       document.addEventListener("DOMContentLoaded", function () {
        // Select the text element
        const text = document.querySelector(".whoTitle");

        // Apply initial style
        gsap.set(text, { opacity: 0, x: -100 });

        // Create the animation
        gsap.to(text, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "power4.out", // You can adjust the easing function as needed
            scrollTrigger: {
                trigger: text,
                start: "top 80%", // Adjust the start position as needed
                end: "bottom 20%", // Adjust the end position as needed
                toggleActions: "play none none reverse", // Plays animation when entering viewport and reverses it when leaving
            },
        });
    });

//text animation of going up in card
const buttons = gsap.utils.toArray(".buttn");
buttons.forEach((item) => {
  let span = item.querySelector("span");
  let tl = gsap.timeline({ paused: true });

  tl.to(span, { duration: 0.2, yPercent: -30, ease: "power2.in" });
  tl.set(span, { yPercent: 100 });
  tl.to(span, { duration: 0.2, yPercent: 0 });

  item.addEventListener("mouseenter", () => tl.play(0));
});

//card from left rotation

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".card1, .card3", { opacity: 0, x: -100, rotation: -45 });

  const trigger = {
    trigger: ".card1, .card3",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none"
  };

  gsap.to(".card1, .card3", {
    duration: 2,
    opacity: 1,
    x: 0,
    rotation: 0,
    ease: "power2.out",
    scrollTrigger: trigger
  });

//card coming from right side

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".card2, .card4", { opacity: 0, x: 300, rotation: 45 });

  const trig = {
    trigger: ".card2, .card4",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none"
  };

  gsap.to(".card2, .card4", {
    duration: 2,
    opacity: 1,
    x: 0,
    rotation: 0,
    ease: "power2.out",
    scrollTrigger: trigger
  });


//partner love animation
       document.addEventListener("DOMContentLoaded", function () {
        // Select the text element
        const text2 = document.querySelector(".head");

        // Apply initial style
        gsap.set(text2, { opacity: 0, x: -100 });

        // Create the animation
        gsap.to(text2, {
            duration: 3,
            opacity: 1,
            x: 0,
            ease: "power4.out", // You can adjust the easing function as needed
            scrollTrigger: {
                trigger: text2,
                start: "top 80%", // Adjust the start position as needed
                end: "bottom 20%", // Adjust the end position as needed
                toggleActions: "play none none reverse", // Plays animation when entering viewport and reverses it when leaving
            },
        });
    });

//code trigger infinite scroll in author section
  const container = document.querySelector('.container');
  const originalContent = container.innerHTML;

  container.addEventListener('scroll', () => {
    if (container.scrollLeft === 0) {
      // Duplicate content to the left
      container.innerHTML = originalContent + container.innerHTML;
      container.scrollLeft = container.scrollWidth / 2;
    } else if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      // Duplicate content to the right
      container.innerHTML += originalContent;
    }
  });

//markee animation 


function marqueeText(element, speed, direction) {
    const marquee = document.getElementById(element);
    const text = marquee.innerText;

    marquee.innerHTML = '';
    let position = 0;
    let lastTime = null;

    function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;

        if (deltaTime >= speed) {
            lastTime = timestamp;
            if (direction === 'left') {
                position++;
                if (position > text.length) {
                    position = 0;
                }
                marquee.innerHTML = text.substring(position) + text.substring(0, position);
            } else if (direction === 'right') {
                position--;
                if (position < -text.length) {
                    position = 0;
                }
                marquee.innerHTML = text.substring(text.length + position) + text.substring(0, text.length + position);
            }
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

marqueeText('marquee1', 80, 'left'); // Adjust speed as needed
marqueeText('marquee2', 80, 'right'); // Adjust speed as needed

//dribble animation
gsap.registerPlugin(ScrollTrigger);

gsap.set(".drib1, .drib3, .drib5", { opacity: 1, x: 0, rotation: 0 });
gsap.set(".drib2, .drib4, .drib6", { opacity: 1, x: 0, rotation: 0 });

const trigger2 = {
  trigger: ".container1",
  start: "top center",
  end: "bottom center",
  toggleActions: "play none none none"
};

gsap.to(".drib1, .drib3, .drib5", {
  duration: 3,
  opacity: 0.5,
  x: -100,
  rotation: -45,
  ease: "power2.out",
  scrollTrigger: trigger2
});

gsap.to(".drib2, .drib4, .drib6", {
  duration: 3,
  opacity: 0.5,
  x: 300,
  rotation: 45,
  ease: "power2.out",
  scrollTrigger: trigger2
});

// animation for join our trek
       document.addEventListener("DOMContentLoaded", function () {
const text3 = document.querySelector(".join-our-trek");

        // Apply initial style
        gsap.set(text3, { opacity: 0, x: -100 });

        // Create the animation
        gsap.to(text3, {
            duration: 5,
            opacity: 1,
            x: 0,
            ease: "power4.out", // You can adjust the easing function as needed
            scrollTrigger: {
                trigger: text3,
                start: "top 80%", // Adjust the start position as needed
                end: "bottom 20%", // Adjust the end position as needed
                toggleActions: "play none none reverse", // Plays animation when entering viewport and reverses it when leaving
            },
        });
    });

// code for handle animation
const handle = document.querySelector('.handle');
  const divs = handle.querySelectorAll('.divi');
  
  divs.forEach(div => {
      div.addEventListener('mouseover', () => {
          divs.forEach(innerDiv => {
              if (innerDiv !== div) {
                  innerDiv.style.opacity = '0.5';
              }
          });
      });
  });

  //color inside footer
  document.addEventListener("DOMContentLoaded", function() {
    var cursElement = document.querySelector(".curs");
    var circles = document.querySelectorAll(".circle");

    cursElement.addEventListener("mouseenter", function() {
        circles.forEach(function(circle) {
            circle.classList.add("curs-circle");
        });
    });

    cursElement.addEventListener("mouseleave", function() {
        circles.forEach(function(circle) {
            circle.classList.remove("curs-circle");
        });
    });
});
