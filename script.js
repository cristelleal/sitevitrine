// Hamburger menu function

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

// Animations load

const title = document.querySelector('h1')
const txt = document.querySelector('h2')
const imgComputer = document.querySelector('.img-computer')
const boxes = document.querySelector('.boxes')

const TL1 = new TimelineMax({paused:true});

TL1
.from(title, 1, {y: -100, opacity: 0})
.from(txt, 1, {opacity: 0}, '-=0.4')
.from(imgComputer, 1, {x: 100, opacity: 0}, '-=0.2')
.from(boxes, 1, {y: -100, opacity: 0})

TL1.play();

// Timeline - About section 

const allCircles = document.querySelectorAll('.circle');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allCircles.length; i++){

        if(allCircles[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allCircles[i],
                reverse: true
            })
            .setTween(tween)
            .addTo(controller)

        }

    }

})

